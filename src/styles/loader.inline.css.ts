export const loaderCSS = `
.loader {
  display: inline-block;
  position: relative;
}

/* Spinner loader style */
.loader-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--loader-color, #09f);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Linear progress bar style */
.loader-progress {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  border-radius: 4px;
}

.loader-progress-fill {
  height: 100%;
  background-color: var(--loader-color, #09f);
  width: 0%;
  transition: width 0.3s ease;
  border-radius: 4px;
}


@keyframes progress {
  0% {
    width: 0%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}

/* Dots loader style */
.loader-dots {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
}

.loader-dots span {
  display: block;
  width: 10px;
  height: 10px;
  background-color: var(--loader-color, #09f);
  border-radius: 50%;
  animation: dots 1.5s infinite ease-in-out;
}

.loader-dots span:nth-child(1) {
  animation-delay: 0s;
}
.loader-dots span:nth-child(2) {
  animation-delay: 0.3s;
}
.loader-dots span:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes dots {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
`;
