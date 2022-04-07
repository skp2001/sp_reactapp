import React from 'react';
import 'bulma/css/bulma.min.css';

import { Navbar } from './components/Navbar'
import { DataList } from './components/DataList';

function App() {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState();
  const [buttonClicked, setButtonClicked] = React.useState(false);

  
  React.useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch("https://reqres.in/api/users?page=1").then(res=>res.clone().json())
      setData(fetchedData.data)
      setLoading(false)
    }
    if (buttonClicked) {
      fetchData();
    }
  }, [buttonClicked])

  return (
    <div className="App">
      {
        loading ? (
          <h1 className='loader'>Loading ...</h1> 
        ) : (
        <>
          <Navbar getData={setButtonClicked} />
          <DataList dataList={data} />
        </>
        )
      }
      
    </div>
  );
}

export default App;
