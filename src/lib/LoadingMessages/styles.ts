export interface LoadingMessagesStyle {
  container?: React.CSSProperties;
  spinnerColor?: string;
}

const styles: LoadingMessagesStyle = {
  container: {
    display: 'flex',
    marginBottom: 10,
  },
  spinnerColor: 'rgb(0, 132, 255)',
};

export { styles as DefaultLoadingMessagesStyle };

export default styles;
