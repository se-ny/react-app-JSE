import React, { useState } from 'react'
import './App.css'

function App() {
  const [projectFilter, setProjectFilter] = useState('all')

  const techStack = {
    aiAndModeling: ['Python', 'PyTorch', 'YOLOv8', 'MediaPipe', 'LSTM', 'Pose Estimation'],
    backendAndInfra: ['FastAPI', 'LangGraph', 'Celery', 'Redis', 'PostgreSQL', 'ChromaDB', 'Docker'],
    robotics: ['ROS2', 'Nav2', 'Gazebo', 'TurtleBot3', 'Streamlit'],
    webAndTools: ['React', 'JavaScript', 'Git / GitHub', 'Figma']
  }

  const highlights = [
    {
      title: 'AI 모델링 & Pose Estimation',
      desc: 'YOLOv8/11 기반 객체 및 포즈 감지 모델 구축 및 데이터 전처리/파이프라인 최적화 경험'
    },
    {
      title: '데이터 분석 & 시각화',
      desc: 'Pandas, Matplotlib, Seaborn을 활용한 데이터 가공 및 모니터링 대시보드 구축'
    },
    {
      title: 'Full-Stack Integration',
      desc: 'FastAPI 및 React를 연동하여 AI 추론 결과를 실시간 웹 서비스로 시각화'
    }
  ]

  const coreConcepts = [
    {
      category: 'Data Analysis & Manipulation',
      topics: [
        {
          title: 'Pandas & NumPy 데이터 가공',
          desc: 'Dataframe 결측치/이상치 처리, GroupBy 연산, Scatter Matrix 및 데이터 분포 탐색(EDA)'
        },
        {
          title: '데이터 시각화 메커니즘',
          desc: 'Matplotlib & Seaborn 기반 차트 커스터마이징, 상관관계 히트맵 구현'
        }
      ]
    },
    {
      category: 'Computer Vision & Deep Learning',
      topics: [
        {
          title: 'YOLO & Pose Estimation',
          desc: 'YOLOv8/11 모델 파이프라인 이해, Keypoint 추출 및 관절 좌표 데이터 기반 동작 감지'
        },
        {
          title: 'PyTorch 신경망 기초',
          desc: 'Tensor 구조 이해, 딥러닝 모델 학습 과정(Loss 계산, Backpropagation, Optimizer)'
        }
      ]
    },
    {
      category: 'Web Backend & Architecture',
      topics: [
        {
          title: 'FastAPI & Static Files 연동',
          desc: 'FastAPI + Jinja2 기반 라우팅 및 정적 파일(Static Files) 관리, 웹 API 구축'
        }
      ]
    }
  ]

  // 프로젝트 내용은 추후 실제 데이터로 채워 넣을 예정
  const allProjects = []

  const filteredProjects = allProjects.filter((p) => {
    if (projectFilter === 'team') return p.type === 'team'
    if (projectFilter === 'personal') return p.type === 'personal'
    return true
  })

  return (
    <div className="portfolio">
      <header className="hero">
        <span className="badge">AI & Data Developer</span>
        <h1>정세은</h1>
        <p className="hero-desc">
          데이터 구조를 이해하고 AI 모델 추론부터 실시간 웹 서비스 연동까지 구현하는 개발자입니다.
        </p>
        <div className="hero-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn primary">
            GitHub
          </a>
          <a href="mailto:example@email.com" className="btn secondary">
            Email Contact
          </a>
        </div>
      </header>

      <main className="content">
        <section className="card">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Python 기반의 데이터 분석 및 AI 모델 구축에 흥미를 느끼며, 복잡한 데이터 및 모델 추론 결과를 웹을 통해 직관적이고 유용하게 전달하는 프로세스를 추구합니다.
            단순 기술 적용을 넘어 실생활 문제를 효율적으로 해결하는 AI 파이프라인 개발을 목표로 하고 있습니다.
          </p>
        </section>

        <section className="card">
          <h2 className="section-title">Key Competencies</h2>
          <div className="highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-item">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Tech Stack</h2>
          <div className="stack-group">
            <span className="stack-label">AI & Modeling</span>
            <div className="tags center">
              {techStack.aiAndModeling.map((tech, idx) => (
                <span key={idx} className="tag ai">{tech}</span>
              ))}
            </div>
          </div>
          <div className="stack-group">
            <span className="stack-label">Backend & Infra</span>
            <div className="tags center">
              {techStack.backendAndInfra.map((tech, idx) => (
                <span key={idx} className="tag backend">{tech}</span>
              ))}
            </div>
          </div>
          <div className="stack-group">
            <span className="stack-label">Robotics</span>
            <div className="tags center">
              {techStack.robotics.map((tech, idx) => (
                <span key={idx} className="tag robotics">{tech}</span>
              ))}
            </div>
          </div>
          <div className="stack-group">
            <span className="stack-label">Web & Tools</span>
            <div className="tags center">
              {techStack.webAndTools.map((tech, idx) => (
                <span key={idx} className="tag web">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Core Concepts & Knowledge</h2>
          <div className="concept-container">
            {coreConcepts.map((cat, idx) => (
              <div key={idx} className="concept-category">
                <h3 className="concept-cat-title">{cat.category}</h3>
                <div className="concept-grid">
                  {cat.topics.map((topic, i) => (
                    <div key={i} className="concept-card">
                      <h4>{topic.title}</h4>
                      <p>{topic.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="projects-header-row">
            <h2 className="section-title margin-none">Featured Projects</h2>
            <div className="filter-tabs">
              <button
                className={`tab-btn ${projectFilter === 'all' ? 'active' : ''}`}
                onClick={() => setProjectFilter('all')}
              >
                전체
              </button>
              <button
                className={`tab-btn ${projectFilter === 'team' ? 'active' : ''}`}
                onClick={() => setProjectFilter('team')}
              >
                👥 팀
              </button>
              <button
                className={`tab-btn ${projectFilter === 'personal' ? 'active' : ''}`}
                onClick={() => setProjectFilter('personal')}
              >
                👤 개인
              </button>
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.length === 0 ? (
              <div className="project-placeholder">
                <p>프로젝트 내용은 추후 업데이트 예정입니다. 🚧</p>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <span className="project-category">
                      {project.type === 'team' ? '👥 Team Project' : '👤 Personal Project'} · {project.category}
                    </span>
                    <span className="project-period">{project.period}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-highlights">
                    <span className="highlights-title">Key Contributions & Results:</span>
                    <ul>
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-techs">
                    {project.techs.map((t, i) => (
                      <span key={i} className="mini-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub Repo →
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 정세은. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
