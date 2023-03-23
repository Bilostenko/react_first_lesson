import data from "./data";
import "./App.css"

function App() {
  return (
    <div>
      <h3>Exchange rate for {data[0].exchangedate}</h3>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Exchange rate</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.txt}</td>
                <td>{item.rate.toFixed(3)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}


export default App;