import * as React from 'react';

const loadingMessagesStyles: LoadingMessagesStyle = {
  containerStyle: {
    display: 'flex',
    marginBottom: 10
  },
  spinnerColor: 'rgb(0, 132, 255)'
};

export interface LoadingMessagesStyle {
  containerStyle?: React.CSSProperties;
  spinnerColor?: string;
}

export interface LoadingMessagesProps {
  styles?: LoadingMessagesStyle;
  isVisible: boolean;
}

const LoadingMessages: React.SFC<LoadingMessagesProps> = props => {
  let { styles } = props;
  if (!styles) {
    styles = {};
  }
  const {
    containerStyle,
    spinnerColor
  } = styles;
  return (
    <div className="react-bell-chat__loading-messages" style={{ ...loadingMessagesStyles.containerStyle, ...containerStyle }}>
      <svg
        width="40px"
        height="40px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{ 
          background: 'none',
          margin: 'auto', 
          fill: spinnerColor ? spinnerColor : loadingMessagesStyles.spinnerColor,
          opacity: props.isVisible ? 1 : 0,
          transition: '0.3s all ease-in-out'
        }}
      >
        <title>Loading messages</title>
        <path
          stroke="none"
          d="M10 50A40 40 0 0 0 90 50A40 46 0 0 1 10 50"
          transform="rotate(42 50 53)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 53;360 50 53"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default LoadingMessages;
