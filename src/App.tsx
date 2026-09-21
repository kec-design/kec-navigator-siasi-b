import { OriginalBackground, OriginalLottie, ComposerGlow } from "./OriginalMotion";
import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"
import "./renewal.css"

const COVER_ID = "__cover__"

const chapters = [
  "공통사항",
  "저압 전기설비",
  "고압·특고압 전기설비",
  "전기철도설비",
  "분산형전원설비",
  "발전용 화력설비",
  "발전용 수력설비",
  "보칙",
]
// 현재 확보된 자료 기준: 하위 목차 데이터는 1장(공통사항)에만 연결되어 있음
const sections = [
  "총칙",
  "일반사항",
  "전선",
  "전로의 절연",
  "접지시스템",
  "피뢰시스템",
  "발전설비 용접",
  "발전설비 비파괴검사",
]
const questions = [
  "접지시스템은 어떻게 구분하나요?",
  "과전류 차단기는 어떤 기준으로 설치해야 하나요?",
]
const entries = [
  ...chapters.map((title, i) => ({ id: String(i + 1), title })),
  ...sections.map((title, i) => ({ id: String(100 + i * 10), title })),
]

type Turn = { question: string; attachedId?: string }
// screen: 홈(hub) / explore(규정 탐색 최상위 분류) / browse(대분류 하위 탐색) / document(원문 열람, AI 패널 겸용) / chat(전체 화면 대화)
type Screen = "home" | "explore" | "browse" | "document" | "chat"
type ReturnTarget = "home" | "explore" | "browse" | "chat"

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, string> = {
    search: "M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
    book: "M12 5v16M12 5C9 2 4 3 2 4v16c4-2 7-1 10 1 3-2 6-3 10-1V4c-4-1-7-2-10 1",
    arrow: "M12 20V4m-6 6 6-6 6 6",
    chevron: "m9 5 7 7-7 7",
    chevronLeft: "m15 5-7 7 7 7",
    sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
    moon: "M20 15A9 9 0 0 1 9 4 9 9 0 1 0 20 15Z",
    menu: "M4 6h16M4 12h16M4 18h16",
    close: "m6 6 12 12M6 18 18 6",
    plus: "M12 5v14M5 12h14",
    attach: "M21 11.5 12.9 19.6a4.2 4.2 0 0 1-5.9-5.9l8.5-8.5a2.8 2.8 0 1 1 4 4l-8.2 8.2a1.4 1.4 0 0 1-2-2l7.6-7.6",
    home: "M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9",
    chat: "M4 5h16v11H8l-4 4V5Z",
    zoomIn: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM21 21l-4.3-4.3M11 8v6M8 11h6",
    zoomOut: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM21 21l-4.3-4.3M8 11h6",
    list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.book} />
    </svg>
  )
}
function Brand() {
  return <><span className="original-brand-symbol"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2L4.5 13.5H11.5L10 22L20 10H13L13 2Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/></svg></span><span className="original-brand-type"><strong>KEC</strong><small>NAVIGATOR</small></span></>;
}

export default function App() {
  const [dark, setDark] = useState(false)
  const [version, setVersion] = useState("2026-01-05")
  const [screen, setScreen] = useState<Screen>("home")
  const [browseChapter, setBrowseChapter] = useState(0) // 1-based index into chapters
  const [browseReturnTo, setBrowseReturnTo] = useState<"home" | "explore">("home")
  const [selected, setSelected] = useState("")
  const [returnTo, setReturnTo] = useState<ReturnTarget>("home")
  const [aiPanelOpen, setAiPanelOpen] = useState(false)
  const [tocOpen, setTocOpen] = useState(false)
  const [tocChapterOpen, setTocChapterOpen] = useState(true)
  const [attachedId, setAttachedId] = useState("")
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState(false)
  const [draft, setDraft] = useState("")
  const [composerFocused, setComposerFocused] = useState(false)
  const [messages, setMessages] = useState<Turn[]>([])
  const [imageError, setImageError] = useState(false)
  const [zoom, setZoom] = useState(100)
  const searchInput = useRef<HTMLInputElement>(null)
  const searchButton = useRef<HTMLButtonElement>(null)
  const modal = useRef<HTMLDivElement>(null)
  const bottom = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setSearch((s) => !s)
      }
      if (e.key === "Escape") {
        if (search) setSearch(false)
        else if (tocOpen) setTocOpen(false)
        else if (aiPanelOpen) setAiPanelOpen(false)
      }
    }
    window.addEventListener("keydown", listener)
    return () => window.removeEventListener("keydown", listener)
  }, [search, tocOpen, aiPanelOpen])
  useEffect(() => {
    if (search) searchInput.current?.focus()
  }, [search])
  useEffect(() => {
    bottom.current?.scrollIntoView({ block: "nearest" })
  }, [messages, screen, aiPanelOpen])

  const closeSearch = () => {
    setSearch(false)
    searchButton.current?.focus()
  }
  // '새 대화': 대화와 진행 상태를 모두 초기화하고 홈으로 이동 (명시적 액션에서만 호출)
  const newChat = () => {
    setMessages([])
    setDraft("")
    setAttachedId("")
    setComposerFocused(false)
    setSelected("")
    setBrowseChapter(0)
    setBrowseReturnTo("home")
    setAiPanelOpen(false)
    setTocOpen(false)
    setSearch(false)
    setQuery("")
    setImageError(false)
    setScreen("home")
  }
  // '홈으로': 화면만 홈으로 전환, 대화는 보존 (로고/홈 아이콘 클릭)
  const goHome = () => {
    setScreen("home")
    setTocOpen(false)
    setSearch(false)
  }
  // '규정 탐색': 대분류 카드를 보여주는 탐색 화면으로 전환, 대화·초안은 보존
  const goExplore = () => {
    setScreen("explore")
    setTocOpen(false)
    setSearch(false)
  }
  const openChapter = (i: number, from: "home" | "explore") => {
    setBrowseChapter(i)
    setBrowseReturnTo(from)
    setScreen("browse")
    setTocOpen(false)
    setSearch(false)
  }
  const openDocument = (id: string, from: ReturnTarget) => {
    setSelected(id)
    setReturnTo(from)
    setAiPanelOpen(false)
    setImageError(false)
    setZoom(100)
    setScreen("document")
    setTocOpen(false)
    setSearch(false)
  }
  const backFromBrowse = () => {
    setScreen(browseReturnTo)
  }
  const backFromDocument = () => {
    setAiPanelOpen(false)
    setScreen(returnTo)
  }
  const askAboutArticle = () => {
    if (selected !== COVER_ID) setAttachedId(selected)
    setAiPanelOpen(true)
  }
  const ask = (text: string) => {
    if (!text.trim()) return
    setMessages((m) => [...m, { question: text.trim(), attachedId: attachedId || undefined }])
    setDraft("")
    setAttachedId("")
    if (screen === "home") setScreen("chat")
  }
  const goToCitation = (id: string) => {
    openDocument(id, "chat")
  }
  const results = entries.filter((e) =>
    `${e.id} ${e.title}`.includes(query.trim()),
  )
  const activeEntry = entries.find((e) => e.id === selected)
  const isCover = selected === COVER_ID

  const tocDrawer = () => (
    <div
      className="kx-drawer-backdrop"
      onClick={() => setTocOpen(false)}
    >
      <aside className="kx-drawer" onClick={(e) => e.stopPropagation()} aria-label="전체 목차">
        <div className="kx-side-head">
          <span className="kx-side-title">전체 목차</span>
          <button
            className="icon-button"
            aria-label="목차 닫기"
            onClick={() => setTocOpen(false)}
          >
            <Icon name="close" size={18} />
          </button>
        </div>
        <div className="kx-side-body">
          <div className="toc-items">
            {chapters.map((title, i) => (
              <div key={title}>
                <div
                  className={`toc-row ${selected === String(i + 1) ? "selected" : ""}`}
                >
                  <button
                    className="expand"
                    aria-label={`${title} ${tocChapterOpen ? "접기" : "펼치기"}`}
                    disabled={i !== 0}
                    aria-expanded={i === 0 ? tocChapterOpen : undefined}
                    onClick={() => setTocChapterOpen((v) => !v)}
                  >
                    {i === 0 ? (
                      <span className={tocChapterOpen ? "rotated" : ""}>
                        <Icon name="chevron" size={13} />
                      </span>
                    ) : (
                      <span>·</span>
                    )}
                  </button>
                  <button onClick={() => openDocument(String(i + 1), screen === "document" ? returnTo : (screen as ReturnTarget))}>
                    <span className="chapter-badge">{i + 1}</span>
                    {title}
                  </button>
                </div>
                {i === 0 && tocChapterOpen && (
                  <div className="subsections">
                    {sections.map((title, j) => (
                      <button
                        className={
                          selected === String(100 + j * 10) ? "selected" : ""
                        }
                        key={title}
                        onClick={() => openDocument(String(100 + j * 10), screen === "document" ? returnTo : (screen as ReturnTarget))}
                      >
                        <span>{100 + j * 10}</span>
                        {title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="cover-link" onClick={() => openDocument(COVER_ID, screen === "document" ? returnTo : (screen as ReturnTarget))}>
            <Icon name="book" size={14} /> 전체 규정 원문 표지 보기
          </button>
          <div className="toc-bottom">
            <span className="status-dot" />
            한국전기설비규정<small>일부 목차를 담은 디자인 시안</small>
          </div>
        </div>
      </aside>
    </div>
  )

  const chatBody = (variant: "full" | "panel") => (
    <div className={`chat-pane chat-pane-${variant}`}>
      <div className="chat-scroll">
        {!messages.length ? (
          <div className="panel-empty">
            <span className="assistant-symbol">✦</span>
            <p>{variant === "panel" ? "이 조항에 대해 무엇이든 물어보세요." : "KEC 조항에 대해 질문해 보세요."}</p>
          </div>
        ) : (
          <div className="conversation">
            <div className="conversation-label">
              KEC NAVIGATOR <span>대화 미리보기</span>
            </div>
            {messages.map((m, i) => (
              <div className="message-pair" key={i}>
                {m.attachedId && (
                  <div className="attach-ref-out">
                    <Icon name="attach" size={12} />
                    <span className="chapter-badge">{m.attachedId}</span>
                    {entries.find((e) => e.id === m.attachedId)?.title} 첨부됨
                  </div>
                )}
                <div className="user-message">{m.question}</div>
                <div className="assistant-message">
                  <span className="assistant-symbol">✦</span>
                  <div>
                    <b>KEC Navigator</b>
                    <p>
                      질문이 입력되었습니다. 이 화면은 디자인 시안으로,
                      실제 AI 답변은 아직 연결되지 않았습니다.
                    </p>
                    {m.attachedId && (
                      <button
                        className="citation"
                        onClick={() => goToCitation(m.attachedId!)}
                      >
                        <Icon name="book" size={15} />
                        <span className="chapter-badge">{m.attachedId}</span>
                        원문 다시 보기 ↗
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottom} />
          </div>
        )}
      </div>
      <div className="composer-area">
        {attachedId && (
          <div className="attach-chip">
            <Icon name="attach" size={12} />
            <span className="chapter-badge">{attachedId}</span>
            <span>{entries.find((e) => e.id === attachedId)?.title}</span>
            <button aria-label="첨부 해제" onClick={() => setAttachedId("")}>
              <Icon name="close" size={12} />
            </button>
          </div>
        )}
        <form
          className="composer"
          onFocusCapture={() => setComposerFocused(true)}
          onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setComposerFocused(false) }}
          onSubmit={(e) => {
            e.preventDefault()
            ask(draft)
          }}
        >
          <ComposerGlow visible={true}/>
          <textarea
            aria-label="질문 입력"
            placeholder={variant === "panel" ? "이 조항에 대해 질문하기" : "KEC 조항에 대해 무엇이든 물어보세요"}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={variant === "panel" ? 2 : 2}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey &&
                !e.nativeEvent.isComposing
              ) {
                e.preventDefault()
                ask(draft)
              }
            }}
          />
          <div className="composer-bottom">
            <span>
              <span className="mini-sparkle">✦</span> KEC 질문
            </span>
            <button
              className="send"
              type="submit"
              disabled={!draft.trim() && !composerFocused}
              aria-label="질문 전송"
            >
              <Icon name="arrow" size={20} />
            </button>
          </div>
        </form>
        <p className="composer-disclaimer">
          디자인 미리보기 · AI 답변 및 검색 서버 연결 전
        </p>
      </div>
    </div>
  )

  const documentToolbar = () => (
    <div className="doc-toolbar">
      <div className="doc-toolbar-left">
        <button className="icon-button" aria-label="이전 위치로 돌아가기" title="이전 위치로 돌아가기" onClick={backFromDocument}>
          <Icon name="chevronLeft" size={18} />
        </button>
        <nav className="breadcrumb" aria-label="현재 위치">
          <button onClick={goExplore}>한국전기설비규정</button>
          <Icon name="chevron" size={12} />
          <span>{isCover ? "원문 표지" : activeEntry?.title}</span>
        </nav>
      </div>
      <div className="doc-toolbar-right">
        <span className="subtle-pill">{version}</span>
        {!isCover && (
          <div className="zoom-group" role="group" aria-label="원문 확대/축소">
            <button className="icon-button" aria-label="축소" onClick={() => setZoom((z) => Math.max(70, z - 10))}>
              <Icon name="zoomOut" size={16} />
            </button>
            <span className="zoom-value">{zoom}%</span>
            <button className="icon-button" aria-label="확대" onClick={() => setZoom((z) => Math.min(160, z + 10))}>
              <Icon name="zoomIn" size={16} />
            </button>
          </div>
        )}
        <button className="toc-launch" onClick={() => setTocOpen(true)}>
          <Icon name="list" size={15} /> <span>목차</span>
        </button>
      </div>
    </div>
  )

  const documentBody = () => (
    <div className="doc-body" style={{ "--doc-zoom": `${zoom}%` } as CSSProperties}>
      {isCover ? (
        version !== "2026-01-05" ? (
          <div className="unavailable">
            <Icon name="book" size={32} />
            <h3>이 버전의 원문은 아직 연결되지 않았어요</h3>
            <p>2026-01-05 버전에서 표지 미리보기를 확인할 수 있습니다.</p>
          </div>
        ) : imageError ? (
          <div className="unavailable">
            <p>원문 이미지를 불러오지 못했어요.</p>
            <a href="https://kecnav.dosystem.kr/reader/1" target="_blank" rel="noreferrer">
              기존 사이트에서 원문 열기 ↗
            </a>
          </div>
        ) : (
          <div className="paper-layout">
            <img
              className="paper"
              alt="한국전기설비규정 2026-01-05 원문 표지 1쪽"
              src="https://kecnav.dosystem.kr/static/2026-01-05/pages/page_0001.jpg"
              onError={() => setImageError(true)}
            />
            <p className="cover-caption">
              전체 규정의 표지 1쪽입니다. 개별 조항의 원문은 아직 연결되어 있지 않습니다.
            </p>
          </div>
        )
      ) : (
        <div className="unavailable">
          <Icon name="book" size={32} />
          <h3>이 조항의 원문은 아직 연결되지 않았습니다</h3>
          <p>
            <span className="chapter-badge">{selected}</span> {activeEntry?.title} 조항의 실제 원문 데이터는
            아직 연결되어 있지 않습니다.
          </p>
          <a href="https://kecnav.dosystem.kr/" target="_blank" rel="noreferrer">
            기존 사이트에서 확인하기 ↗
          </a>
        </div>
      )}
    </div>
  )

  const documentScreen = () => (
    <div className={`kx-doc-wrap ${aiPanelOpen ? "with-panel" : ""}`}>
      <section className="kx-doc" aria-label="원문 열람">
        {documentToolbar()}
        <div className="doc-scroll">{documentBody()}</div>
        <footer className="doc-foot">
          <span className="status-dot" /> 디자인 시안 · 실제 원문 연결 예정
          {!isCover && !aiPanelOpen && (
            <button className="ask-article-btn" onClick={askAboutArticle}>
              <Icon name="chat" size={15} /> 이 조항에 질문
            </button>
          )}
        </footer>
      </section>
      {aiPanelOpen && (
        <section className="kx-ai-panel" aria-label="AI 질문 패널">
          <div className="kx-ai-panel-head">
            <span className="eyebrow">AI 질문</span>
            <button className="icon-button" aria-label="AI 패널 닫기" onClick={() => setAiPanelOpen(false)}>
              <Icon name="close" size={16} />
            </button>
          </div>
          {chatBody("panel")}
        </section>
      )}
    </div>
  )

  const browseScreen = () => {
    const chapterIdx = browseChapter - 1
    const chapterTitle = chapters[chapterIdx]
    const hasSubsections = browseChapter === 1
    return (
      <div className="kx-browse">
        <nav className="breadcrumb" aria-label="현재 위치">
          <button onClick={goExplore}>한국전기설비규정</button>
          <Icon name="chevron" size={12} />
          <span>{chapterTitle}</span>
        </nav>
        <div className="browse-head">
          <button className="icon-button" aria-label="이전 목록으로" title="이전 목록으로" onClick={backFromBrowse}>
            <Icon name="chevronLeft" size={18} />
          </button>
          <h2><span className="chapter-badge">{browseChapter}</span> {chapterTitle}</h2>
        </div>
        {hasSubsections ? (
          <div className="browse-list">
            {sections.map((title, j) => (
              <button className="browse-row" key={title} onClick={() => openDocument(String(100 + j * 10), "browse")}>
                <span className="chapter-badge">{100 + j * 10}</span>
                <span>{title}</span>
                <Icon name="chevron" size={16} />
              </button>
            ))}
          </div>
        ) : (
          <div className="browse-empty">
            <p>이 대분류의 세부 목차는 아직 준비 중입니다. 대분류 원문 표지 상태만 우선 확인할 수 있습니다.</p>
            <button className="browse-row" onClick={() => openDocument(String(browseChapter), "browse")}>
              <span className="chapter-badge">{browseChapter}</span>
              <span>{chapterTitle} 원문 보기</span>
              <Icon name="chevron" size={16} />
            </button>
          </div>
        )}
      </div>
    )
  }

  const exploreScreen = () => (
    <div className="kx-explore">
      <h2 className="kx-explore-title">규정 탐색</h2>
      <p className="kx-explore-sub">대분류를 선택하면 하위 목차와 원문을 찾아볼 수 있습니다.</p>
      <div className="chapter-grid">
        {chapters.map((title, i) => (
          <button className="chapter-card" key={title} onClick={() => openChapter(i + 1, "explore")}>
            <span className="chapter-badge">{i + 1}</span>
            <span className="chapter-card-title">{title}</span>
            <Icon name="chevron" size={16} />
          </button>
        ))}
      </div>
    </div>
  )

  const homeScreen = () => (
    <div className="kx-home">
      <div className="home-hero">
        <div className="original-title-row"><OriginalLottie/><div className="original-title-wrap"><h1 className="original-title">KEC조항에 대해 무엇이든 물어보세요</h1><span aria-hidden="true" className="original-title title-sweep">KEC조항에 대해 무엇이든 물어보세요</span></div></div>
        <form
          className="composer home-composer"
          onFocusCapture={() => setComposerFocused(true)}
          onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setComposerFocused(false) }}
          onSubmit={(e) => {
            e.preventDefault()
            ask(draft)
          }}
        >
          <ComposerGlow visible={true}/>
          <textarea
            aria-label="질문 입력"
            placeholder="KEC 조항에 대해 무엇이든 물어보세요"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={2}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault()
                ask(draft)
              }
            }}
          />
          <div className="composer-bottom">
            <span><span className="mini-sparkle">✦</span> KEC 질문</span>
            <button className="send" type="submit" disabled={!draft.trim() && !composerFocused} aria-label="질문 전송">
              <Icon name="arrow" size={20} />
            </button>
          </div>
        </form>
        <div className="home-suggestions">
          {questions.map((q) => (
            <button onClick={() => ask(q)} key={q}>{q}</button>
          ))}
        </div>
        {messages.length > 0 && (
          <button className="resume-chat-inline" onClick={() => setScreen("chat")}>
            <Icon name="chat" size={14} /> 진행 중인 대화로 돌아가기
          </button>
        )}
      </div>
      <div className="home-browse">
        <h2>규정 둘러보기</h2>
        <div className="chapter-grid">
          {chapters.map((title, i) => (
            <button className="chapter-card" key={title} onClick={() => openChapter(i + 1, "home")}>
              <span className="chapter-badge">{i + 1}</span>
              <span className="chapter-card-title">{title}</span>
              <Icon name="chevron" size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const chatStartHero = () => (
    <div className="kx-chat-start">
      <div className="home-hero">
        <div className="original-title-row"><OriginalLottie/><div className="original-title-wrap"><h1 className="original-title">KEC조항에 대해 무엇이든 물어보세요</h1><span aria-hidden="true" className="original-title title-sweep">KEC조항에 대해 무엇이든 물어보세요</span></div></div>
        <form
          className="composer home-composer"
          onFocusCapture={() => setComposerFocused(true)}
          onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setComposerFocused(false) }}
          onSubmit={(e) => {
            e.preventDefault()
            ask(draft)
          }}
        >
          <ComposerGlow visible={true}/>
          <textarea
            aria-label="질문 입력"
            placeholder="KEC 조항에 대해 무엇이든 물어보세요"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={2}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault()
                ask(draft)
              }
            }}
          />
          <div className="composer-bottom">
            <span><span className="mini-sparkle">✦</span> KEC 질문</span>
            <button className="send" type="submit" disabled={!draft.trim() && !composerFocused} aria-label="질문 전송">
              <Icon name="arrow" size={20} />
            </button>
          </div>
        </form>
        <div className="home-suggestions">
          {questions.map((q) => (
            <button onClick={() => ask(q)} key={q}>{q}</button>
          ))}
        </div>
      </div>
    </div>
  )

  const chatScreen = () => (
    <div className="kx-chat-full">
      {messages.length === 0 ? chatStartHero() : (
        <div className="kx-chat-inner">
          {chatBody("full")}
        </div>
      )}
    </div>
  )

  return (
    <div className={`renewal ${dark ? "dark" : ""}`}>
      <div className="original-background"><OriginalBackground dark={dark}/></div>
      <header className="kx-top">
        <button
          className="brand"
          onClick={goHome}
          aria-label="처음 화면으로"
          title="처음 화면으로"
        >
          <Brand />
        </button>
        <nav className="kx-nav" aria-label="주요 이동">
          <button
            className={`kx-nav-link ${["explore", "browse", "document"].includes(screen) ? "active" : ""}`}
            onClick={goExplore}
          >
            <Icon name="book" size={15} /> <span>규정 탐색</span>
          </button>
          <button
            className={`kx-nav-link ${screen === "chat" ? "active" : ""}`}
            onClick={() => setScreen("chat")}
          >
            <Icon name="chat" size={15} /> <span>AI 채팅</span>
          </button>
        </nav>
        <div className="kx-top-actions">
          <div className="version-select">
            <select
              aria-label="규정 버전 선택"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            >
              <option>2026-01-05</option>
              <option>2020-12-31</option>
            </select>
            <span className="version-caret" aria-hidden="true">
              <Icon name="chevron" size={14} />
            </span>
          </div>
          <button
            className="icon-button"
            aria-label="조항 검색"
            title="조항 검색 (⌘K)"
            onClick={() => setSearch(true)}
          >
            <Icon name="search" size={17} />
          </button>
          <button
            className="icon-button"
            aria-label="새 대화 시작"
            title="새 대화"
            onClick={newChat}
          >
            <Icon name="plus" size={17} />
          </button>
          <button
            className="icon-button"
            aria-label="홈으로"
            title="홈으로"
            onClick={goHome}
          >
            <Icon name="home" size={17} />
          </button>
          <button
            className="icon-button"
            aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            title={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            onClick={() => setDark((d) => !d)}
          >
            <Icon name={dark ? "sun" : "moon"} size={17} />
          </button>
        </div>
      </header>

      <main className="kx-main">
        {screen === "home" && homeScreen()}
        {screen === "explore" && exploreScreen()}
        {screen === "browse" && browseScreen()}
        {screen === "document" && documentScreen()}
        {screen === "chat" && chatScreen()}
      </main>

      {tocOpen && tocDrawer()}

      {search && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSearch()
          }}
        >
          <div
            className="search-modal"
            ref={modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            onKeyDown={(e) => {
              if (e.key !== "Tab") return
              const nodes = modal.current?.querySelectorAll<HTMLElement>(
                "button:not([disabled]), input, a[href]",
              )
              if (!nodes?.length) return
              const first = nodes[0],
                last = nodes[nodes.length - 1]
              if (e.shiftKey && document.activeElement === first) {
                e.preventDefault()
                last.focus()
              } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault()
                first.focus()
              }
            }}
          >
            <div className="search-input-row">
              <Icon name="search" />
              <input
                ref={searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="조항 번호나 키워드를 입력하세요"
                aria-label="검색어"
              />
              <button
                className="icon-button"
                onClick={closeSearch}
                aria-label="검색 닫기"
              >
                <Icon name="close" />
              </button>
            </div>
            <div className="search-meta">
              <h2 id="search-title">
                {query ? "목차 검색 결과" : "규정 목차 바로가기"}
              </h2>
              <span>{results.length}개</span>
            </div>
            <div className="search-results">
              {results.length ? (
                results.map((e) => (
                  <button key={e.id} onClick={() => openDocument(e.id, screen === "document" ? returnTo : (screen as ReturnTarget))}>
                    <span className="chapter-badge">{e.id}</span>
                    <span>
                      {e.title}
                      <small>한국전기설비규정 · 목차</small>
                    </span>
                    <Icon name="chevron" size={16} />
                  </button>
                ))
              ) : (
                <p className="no-results">
                  일치하는 목차가 없습니다. 다른 키워드로 검색해 주세요.
                </p>
              )}
            </div>
            <footer>시안에 포함된 목차 검색 · 전체 규정 검색 연결 예정</footer>
          </div>
        </div>
      )}
    </div>
  )
}
