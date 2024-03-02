import { useState } from 'react'

import './App.css'

function App() {
  const [state, setState] = useState(
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ]
    
    );

    const sortByDate = () => {
      let updated = [...state].sort(function (a, b) {
        if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
          return b.views - a.views;
        } else {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
      });
      setState(updated);
    };
  
    const sortByViews = () => {
      let updated = [...state].sort(function (a, b) {
        return b.views - a.views;
      });
      setState(updated);
    };
  
    return (
      <div>
        <h1>Date and Views Table</h1>
        <div>
          <button onClick={sortByDate}>Sort by Date</button>
          <button onClick={sortByViews}>Sort by Views</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>
              </tr>
            </thead>
            <tbody>
              {state.map((el, i) => (
                <tr key={i}>
                  <td>{el.date}</td>
                  <td>{el.views}</td>
                  <td>{el.article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default App
