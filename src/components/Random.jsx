

function Random({min, max}) {
   let randomNum = 0
    function random(min, max) {
        return randomNum=Math.floor((Math.random() * (max - min + 1)) + min);
    }
    random(min, max)
  return (
    <div>{randomNum}</div>
  )
}

export default Random