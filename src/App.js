import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import QS from 'qs';
import ItemList from './components/ItemList';
import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';
import api from './services/api';

const LIMIT = 20;

const App = () => {
  
  const [text, setText] = useState('');
  const [info, setInfo] = useState({});
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const query = {
        page: {
          limit: LIMIT,
          offset,
        }
      };

      if (text) {
        query.filter = {
          text,
        };
      }

      api.get(`/anime?${QS.stringify(query)}`).then((response) => {
        return setInfo(response.data)
      })
      
      
  }, [text, offset]);

    return (
        <div className="App">
            <h1>Animes</h1>
            <div>
                <SearchInput value={text} onChange={(search) => setText(search)}/>
                <Link to="/favorites">favoritos</Link>
            </div>
            <ItemList 
                text={text} 
                info={info}
            />
            {info.meta && (
                <div>
                    <Pagination 
                        limit={LIMIT} 
                        total={info.meta.count} 
                        offset={offset}
                        setOffset={setOffset} 
                    />
                </div>                
            )}
            
        </div>
    )
}

export default App;