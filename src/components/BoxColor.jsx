
function BoxColor({r, g, b}) {
    const boxStyle = `color:#${r},${b},${g}`

  return (
    <div>
        <div style={{boxStyle}}>rgb({r},{g},{b}) </div>
    </div>
  )
}

export default BoxColor