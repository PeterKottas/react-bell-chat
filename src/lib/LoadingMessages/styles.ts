export interface LoadingMessagesStyle {
  container?: React.CSSProperties;
  spinnerColor?: string;
}

const styles: LoadingMessagesStyle = {
  container: {
    display: 'flex',
    marginBottom: 10,
  },
  spinnerColor: 'currentColor',
};

export { styles as defaultLoadingMessagesStyle };
