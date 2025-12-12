import { useState } from 'react';
import './CourseContent.scss';
import { courseModules } from './courseData';
import VideoModal from '../../components/VideoModal/VideoModal';

export default function CourseContent() {
  const [selectedModule, setSelectedModule] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const currentModule = courseModules[selectedModule];
  const currentChapter = currentModule.chapters[selectedChapter];

  const goToPreviousLesson = () => {
    if (selectedChapter > 0) {
      setSelectedChapter(selectedChapter - 1);
    } else if (selectedModule > 0) {
      setSelectedModule(selectedModule - 1);
      setSelectedChapter(courseModules[selectedModule - 1].chapters.length - 1);
    }
  };

  const goToNextLesson = () => {
    if (selectedChapter < currentModule.chapters.length - 1) {
      setSelectedChapter(selectedChapter + 1);
    } else if (selectedModule < courseModules.length - 1) {
      setSelectedModule(selectedModule + 1);
      setSelectedChapter(0);
    }
  };

  const isFirstLesson = selectedModule === 0 && selectedChapter === 0;
  const isLastLesson = selectedModule === courseModules.length - 1 && selectedChapter === currentModule.chapters.length - 1;

  return (
    <div className="CourseContent">
      <div className="course-container">
        <div className="course-sidebar">
          <div className="sidebar-header">
            <h2>Содержание курса</h2>
          </div>

          <div className="modules-list">
            {courseModules.map((module, moduleIdx) => (
              <div key={module.id} className="module">
                <button
                  className={`module-button ${selectedModule === moduleIdx ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedModule(moduleIdx);
                    setSelectedChapter(0);
                  }}
                >
                  <span className="module-number">Модуль {moduleIdx + 1}</span>
                  <span className="module-title">{module.title}</span>
                </button>

                {selectedModule === moduleIdx && (
                  <div className="chapters-list">
                    {module.chapters.map((chapter, chapterIdx) => (
                      <button
                        key={chapter.id}
                        className={`chapter-button ${selectedChapter === chapterIdx ? 'active' : ''}`}
                        onClick={() => setSelectedChapter(chapterIdx)}
                      >
                        <span className="chapter-number">{chapter.id}</span>
                        <span className="chapter-title">{chapter.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="course-main">
          <div className="lesson-header">
            <div className="breadcrumb">
              <span>{currentModule.title}</span>
              <span className="separator">→</span>
              <span>{currentChapter.title}</span>
            </div>
            <h1 className="lesson-title">{currentChapter.title}</h1>
            <p className="lesson-subtitle">Раздел курса с видео, материалами и практическими заданиями</p>
          </div>

          <div className="video-section">
            <div className="video-container">
              <div className="video-placeholder">
                <div className="play-button-large" onClick={() => setIsVideoOpen(true)}>
                  <svg width="60" height="60" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="rgba(255, 200, 0, 0.1)" stroke="#ffc800" strokeWidth="2"/>
                    <polygon points="32,25 32,55 55,40" fill="#ffc800"/>
                  </svg>
                </div>
                <p className="video-text">Нажмите чтобы посмотреть видео-урок</p>
              </div>
            </div>
          </div>

          <div className="lesson-content">
            <div className="content-text" dangerouslySetInnerHTML={{ __html: currentChapter.content }} />

            <div className="assignment-section">
              <div className="assignment-content" dangerouslySetInnerHTML={{ __html: currentChapter.assignment }} />
            </div>
          </div>

          <div className="navigation">
            <button
              className="nav-button nav-prev"
              onClick={goToPreviousLesson}
              disabled={isFirstLesson}
            >
              ← Предыдущий урок
            </button>

            <div className="progress-indicator">
              <span className="progress-text">
                Урок {currentChapter.id} из {courseModules.reduce((sum, mod) => sum + mod.chapters.length, 0)}
              </span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${((currentChapter.id - 1) / (courseModules.reduce((sum, mod) => sum + mod.chapters.length, 0) - 1)) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            <button
              className="nav-button nav-next"
              onClick={goToNextLesson}
              disabled={isLastLesson}
            >
              Следующий урок →
            </button>
          </div>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoId={currentChapter.videoId} />
    </div>
  );
}
