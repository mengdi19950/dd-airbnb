function styleStringToObj(str){
  if (!str) {
    return {}
  }
  // 使用正则表达式解析样式字符串
  const styles = str.split(';').reduce((acc, style) => {
    const [property, value] = style.split(':').map(part => part.trim());
    if (property && value) {
      acc[property] = value;
    }
    return acc;
  }, {})

  return styles
}

export default styleStringToObj