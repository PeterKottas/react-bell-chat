export interface DateRowStyles {
  container?: React.CSSProperties;
}

const styles: DateRowStyles = {
  container: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)',
  },
};

export { styles as defaultDateRowStyles };
