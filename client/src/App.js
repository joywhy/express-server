
import './App.css';

function App() {
  
  function getSound() {
    const name =document.getElementById('name').value
    fetch(`http://localhost:3001/user/${name}`)  //http://localhost:3000/user/${name}받아와줘 
    .then((res)=>res.json()) //프로미스 반환
    .then((data)=>{
        console.log(data.name) //멍멍 
        document.getElementById("sound").innerHTML=data.name
    //리액트 훅 useref 직접 지목할 수 있다 코드 가독성 최적화 
    
    });
}



  return (
    <div className="App">
        <h1 id ="sound"></h1>
       <input id ="name" type="text"/>
       <button onClick={getSound}> api 요청</button>
    </div>
  );
}

export default App;
