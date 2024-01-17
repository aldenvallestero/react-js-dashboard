import axios from 'axios';
import { useEffect, useState } from 'react';

const ListWidget = ({ data }) => {
  const [list, setList] = useState();
  useEffect(() => {
    axios({
      method: 'get',
      url: data.api,
    })
      .then(result => {
        setList(result.data.results);
      });
  }, []);

  return (
    <div className="block shadow p-4 m-4 rounded-md border">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <ul>
        {
          list?.map(i => (
            <li>{i.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ListWidget;
