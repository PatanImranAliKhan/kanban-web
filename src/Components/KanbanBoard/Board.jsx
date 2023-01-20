import React, { useState } from 'react'
import board from '../sampledata'
import './board.css'
import Sidenav from '../sidenav/Sidenav.jsx';

export default function Board() {

  const [board_data, setboard] = useState(board);

  return (
    <div className="total_board" >
      <div className='leftsidenav'>
        <Sidenav ></Sidenav>
      </div>
      <div className='rightboard'>
        <div className='main_board_content'>
          <div className='top_board'>
            <div align="center">
              <h4>Kanban Board</h4>
            </div>
            <div className='search'>
              <div>
                <div className='form-group'>
                  <label>Search</label>
                  <input type="search" className='form-control' />
                </div>
              </div>
            </div>
          </div>
          <div className='middle_board'>
            <div className='main_board_section'>
              {
                board_data?.map((response, ind) => {

                  return (
                    <div className='board' key={ind}>
                      <div className='board-title'>
                        <h5>{response.name}</h5>
                      </div>
                      <div className='board_component'>
                        <div>
                          {
                            response.data?.map((data, index) => {
                              return (
                                <div className='card' key={index}>
                                  <div className='card-body'>
                                    <div className='card-title'>
                                      {data.title}
                                    </div>
                                    <div className='card-text'>
                                      {data.description}
                                    </div>
                                    <div className='card-link'>
                                      <a href="#">link</a>
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
