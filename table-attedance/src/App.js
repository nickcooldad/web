
import './App.css';
import { TabbleAttedance } from './tabbleAttedance/tabbleAttedance';



function App() {
  

  const employees = [
  {
    name: "Andrew Clark",
    vacations: [
      ["21.01.24", "24.01.24"],
      ["06.05.24", "13.05.24"],
      ["24.05.24", "08.06.24"],
      ["28.06.24", "18.07.24"],
    ],
  },
  {
    name: "Dan Abramov",
    vacations: [
      ["12.05.24", "20.05.24"],
      ["04.05.24", "06.05.24"],
      ["25.05.24", "26.05.24"],
    ],
  },
  {
    name: "Jason Bonta",
    vacations: [
      ["13.05.24", "16.05.24"],
      ["11.06.24", "12.06.24"],
      ["26.05.24", "26.05.24"],
      ["25.05.24", "26.05.24"],
    ],
  },
  {
    name: "Joe Savona",
    vacations: [
      ["04.04.24", "06.05.24"],
      ["26.05.24", "01.06.24"],
      ["13.05.24", "16.05.24"],
    ],
  },
];



  return (
    <div className="App">
      <TabbleAttedance employees={employees}/>
    </div>
  );
}

export default App;
