import { useState } from 'react'
import heroImage from './assets/backlight.svg'
import './App.css'

function App() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      setStatus('submitting')
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        throw new Error('Request failed')
      }
      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">BL</span>
          <div>
            <p className="brand-name">라이트픽스 TV 백라이트 수리</p>
            <p className="brand-sub">TV 화면 어둡거나 깜빡임? 당일 진단 · 합리적 수리</p>
          </div>
        </div>
        <nav className="site-nav">
          <a href="#services">서비스</a>
          <a href="#process">진행</a>
          <a href="#pricing">견적</a>
          <a href="#faq">FAQ</a>
          <a href="#intake">접수</a>
        </nav>
        <div className="header-cta">
          <a className="button ghost" href="tel:010-2117-0633">
            전화 문의
          </a>
          <a className="button solid" href="#intake">
            수리 접수
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">TV 백라이트 수리 전문업체</p>
            <h1>
              TV 백라이트 고장,
              <br />
              부품만 교체해 수리비를 줄입니다.
            </h1>
            <p className="lead">
              화면이 어둡거나 반만 보이는 증상, 전원은 켜지지만 화면이 검게 보이는
              증상에 특화된 백라이트 수리 서비스를 제공합니다. 정품 등급 LED와
              정밀 측정으로 재고장률을 낮춥니다.
            </p>
            <div className="hero-actions">
              <a className="button solid" href="#intake">
                지금 접수하기
              </a>
              <a className="button ghost" href="#pricing">
                견적 기준 보기
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <strong>24시간 이내</strong>
                <span>1차 응대</span>
              </div>
              <div>
                <strong>3단계</strong>
                <span>진단 · 수리 · 테스트</span>
              </div>
              <div>
                <strong>6개월</strong>
                <span>수리 보증</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={heroImage}
              alt="TV 백라이트 수리 전후를 상징하는 빛의 바 이미지"
              loading="lazy"
            />
            <div className="hero-card">
              <p>주요 증상 체크</p>
              <ul>
                <li>화면이 어둡거나 한쪽만 보임</li>
                <li>전원은 켜지는데 화면이 검게 유지</li>
                <li>깜빡임, 밝기 불안정</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-header">
            <p className="eyebrow">서비스</p>
            <h2>TV 백라이트 수리, 이렇게 도와드립니다.</h2>
            <p>
              모델별 패널 구조를 분석해 필요한 LED 바만 교체하고, 전류를 재설정해
              수명을 늘립니다.
            </p>
          </div>
          <div className="grid three">
            <article className="card">
              <h3>백라이트 교체</h3>
              <p>화면 밝기 저하, 검은 화면 원인인 LED 바를 부분/전체 교체.</p>
            </article>
            <article className="card">
              <h3>파워 · 인버터 점검</h3>
              <p>LED 구동 전류를 측정해 불량 보드를 교정 또는 교체.</p>
            </article>
            <article className="card">
              <h3>방문/픽업 수리</h3>
              <p>대형 TV는 방문 수리 또는 픽업/배송으로 부담을 줄입니다.</p>
            </article>
          </div>
        </section>

        <section className="section highlight">
          <div className="grid two">
            <div>
              <p className="eyebrow">차별점</p>
              <h2>백라이트 수리 경험 1,000건+</h2>
              <p>
                수리 후 장시간 번인 테스트로 깜빡임과 균일도를 확인합니다. 부품
                수급이 어려운 모델도 대체 호환 부품을 확보해 수리합니다.
              </p>
              <ul className="checklist">
                <li>모델별 LED 바 정품/호환 재고 보유</li>
                <li>사전 견적 및 고지 후 수리 진행</li>
                <li>사진 기반 비대면 진단 가능</li>
              </ul>
            </div>
            <div className="stat-block">
              <div>
                <strong>98%</strong>
                <span>1차 수리 성공률</span>
              </div>
              <div>
                <strong>7일</strong>
                <span>평균 수리 소요</span>
              </div>
              <div>
                <strong>6개월</strong>
                <span>사후 보증 지원</span>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="section-header">
            <p className="eyebrow">진행</p>
            <h2>수리 진행 프로세스</h2>
          </div>
          <div className="timeline">
            <div>
              <span>01</span>
              <h3>증상 접수</h3>
              <p>사진/영상 공유로 1차 진단 후 예상 견적 제공.</p>
            </div>
            <div>
              <span>02</span>
              <h3>정밀 점검</h3>
              <p>패널 분해 및 LED 전류 측정, 불량 구간 확인.</p>
            </div>
            <div>
              <span>03</span>
              <h3>수리 · 테스트</h3>
              <p>LED 교체 후 균일도/열 안정성 테스트 진행.</p>
            </div>
            <div>
              <span>04</span>
              <h3>완료 안내</h3>
              <p>수리 결과 공유 및 보증 안내, 배송 또는 방문 설치.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="section-header">
            <p className="eyebrow">견적</p>
            <h2>백라이트 수리비는 이렇게 산정됩니다.</h2>
            <p>패널 크기와 모델, 교체 부품 범위에 따라 달라집니다.</p>
          </div>
          <div className="grid three">
            <article className="price-card">
              <h3>42 ~ 50인치</h3>
              <p className="price">8만원대 ~</p>
              <ul>
                <li>부분 LED 교체</li>
                <li>기본 점검 포함</li>
              </ul>
            </article>
            <article className="price-card featured">
              <h3>55 ~ 65인치</h3>
              <p className="price">12만원대 ~</p>
              <ul>
                <li>부분/전체 교체</li>
                <li>장시간 테스트 포함</li>
              </ul>
            </article>
            <article className="price-card">
              <h3>70인치 이상</h3>
              <p className="price">상담 후 견적</p>
              <ul>
                <li>픽업/방문 옵션</li>
                <li>부품 수급 확인</li>
              </ul>
            </article>
          </div>
          <p className="note">
            ※ 실제 견적은 모델과 증상에 따라 달라질 수 있습니다. 접수 후 정확한
            진단 결과를 안내드립니다.
          </p>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="eyebrow">서비스 지역</p>
            <h2>서울/경기 방문 수리 · 전국 택배 접수</h2>
            <p>픽업이 어려운 지역은 안전 포장 가이드와 함께 택배 접수가 가능합니다.</p>
          </div>
          <div className="region-tags">
            <span>서울 전지역</span>
            <span>경기 남/북부</span>
            <span>인천</span>
            <span>전국 택배</span>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="section-header">
            <p className="eyebrow">FAQ</p>
            <h2>자주 묻는 질문</h2>
          </div>
          <div className="faq">
            <details>
              <summary>수리 기간은 얼마나 걸리나요?</summary>
              <p>모델별 부품 재고가 있을 경우 평균 3~7일 내 완료됩니다.</p>
            </details>
            <details>
              <summary>수리 후 보증은 어떻게 되나요?</summary>
              <p>백라이트 수리는 6개월 보증을 제공하며, 동일 증상 시 재점검합니다.</p>
            </details>
            <details>
              <summary>출장비가 별도로 있나요?</summary>
              <p>지역에 따라 출장비가 발생할 수 있으며, 접수 시 안내드립니다.</p>
            </details>
          </div>
        </section>

        <section id="intake" className="section intake">
          <div className="section-header">
            <p className="eyebrow">접수</p>
            <h2>TV 백라이트 수리 접수폼</h2>
            <p>접수 내용을 확인 후 24시간 내 안내드립니다.</p>
          </div>
          <form className="intake-form" onSubmit={handleSubmit}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            <label>
              성함
              <input name="name" type="text" placeholder="홍길동" required />
            </label>
            <label>
              연락처
              <input name="phone" type="tel" placeholder="010-2117-0633" required />
            </label>
            <label>
              TV 모델명
              <input name="model" type="text" placeholder="예: 삼성 UN55..." />
            </label>
            <label>
              증상 설명
              <textarea
                name="issue"
                rows={4}
                placeholder="화면이 어둡고, 오른쪽이 깜빡입니다."
                required
              />
            </label>
            <label>
              방문/픽업 희망일
              <input name="schedule" type="text" placeholder="예: 2월 5일 오후" />
            </label>
            <button className="button solid" type="submit">
              {status === 'submitting' ? '접수 중...' : '접수하기'}
            </button>
            {status === 'success' && (
              <p className="form-note success">접수가 완료되었습니다. 곧 연락드리겠습니다.</p>
            )}
            {status === 'error' && (
              <p className="form-note error">접수에 실패했습니다. 전화 문의 부탁드립니다.</p>
            )}
          </form>
          <div className="intake-side">
            <div className="contact-card">
              <h3>긴급 문의</h3>
              <p>상담 가능 시간: 09:00 ~ 20:00</p>
              <a className="button ghost" href="tel:010-2117-0633">
                010-2117-0633
              </a>
              <p className="small">문자/카카오 상담도 가능합니다.</p>
            </div>
            <div className="contact-card">
              <h3>사진으로 빠른 진단</h3>
              <p>TV 화면 사진과 모델명 사진을 보내주시면 정확도가 올라갑니다.</p>
              <p className="small">사진은 접수 후 안내 문자로 전송 링크를 받으실 수 있습니다.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand-name">라이트픽스 TV 백라이트 수리</p>
          <p>사업자명/주소/사업자번호는 실제 정보로 교체해 주세요.</p>
        </div>
        <div className="footer-links">
          <a href="tel:010-2117-0633">전화</a>
          <a href="mailto:help@lightfix.co.kr">이메일</a>
          <a href="#intake">접수</a>
        </div>
      </footer>
    </div>
  )
}

export default App
