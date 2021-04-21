import * as React from 'react';
import classnames from 'classnames';
import { LoadingMessagesStyle, defaultLoadingMessagesStyle } from './styles';
import {
  LoadingMessagesClasses,
  defaultLoadingMessagesClasses,
} from './classes';
export * from './classes';
export * from './styles';

export interface LoadingMessagesProps {
  styles?: LoadingMessagesStyle;
  classes?: LoadingMessagesClasses;
  className?: string;
  isVisible: boolean;
}

const LoadingMessages: React.FC<LoadingMessagesProps> = (props) => {
  const { styles, classes } = props;

  const style = React.useMemo(
    () => ({
      ...defaultLoadingMessagesStyle.container,
      ...styles?.container,
    }),
    [styles?.container]
  );

  const svgStyle = React.useMemo(
    () => ({
      background: 'none',
      margin: 'auto',
      fill: styles?.spinnerColor ?? defaultLoadingMessagesStyle.spinnerColor,
      opacity: props.isVisible ? 1 : 0,
      transition: '0.3s all ease-in-out',
    }),
    [styles?.spinnerColor, props.isVisible]
  );
  return (
    <div
      className={classnames(
        defaultLoadingMessagesClasses.container,
        props.className,
        classes?.container
      )}
      style={style}
    >
      <svg
        width="40px"
        height="40px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={svgStyle}
      >
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

const Memoized = React.memo(LoadingMessages);

export { Memoized as LoadingMessages };
