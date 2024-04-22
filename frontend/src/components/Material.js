import React from 'react'
import Navbar from './Navbar'

export default function Material() {
    return (
        <>
            <Navbar />
            <div className="body">
                <h2 className="center">Materials</h2>
                <div className="container custom-cont ">
                    <div className="column custom-col box1 rounded">
                        <h2>Previous Years</h2>
                        <div className="container rounded bg-primary bg-gradient bg-opacity-50 py-2">
                            <ul className="list-cont">
                                <li>
                                    <img src="/pdf.png" alt="img" height={20} width={20}/>
                                    <span>Sem_2018</span>
                                </li>
                                <li>
                                    <img src="/pdf.png" alt="img" height={20} width={20}/>
                                    <span>Sem_2019</span>
                                </li>
                                <li>
                                    <img src="/pdf.png" alt="img" height={20} width={20}/>
                                    <span> Sem_2020</span>
                                </li>
                                <li>
                                    <img src="/pdf.png" alt="img" height={20} width={20}/>
                                    <span> Sem_2021</span>
                                </li>
                                <li>
                                    <img src="/pdf.png" alt="img" height={20} width={20}/>
                                    <span> Sem_2022</span>
                                </li>
                                <li>
                                    <img src="/pdf.png" alt="img" height={20} width={20}/>
                                    <span> Sem_2023</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column custom-col box2 rounded">
                        <h2>Notes</h2>
                        <div className="container rounded bg-primary bg-gradient bg-opacity-50 py-2">
                            <ul className="list-cont">
                                <li>
                                    <img src="/word.png" alt="img" height={20} width={20}/>
                                    <span> Topic_1</span>
                                </li>
                                <li>
                                    <img src="/pdf.png" alt="img" height={20} width={20}/>
                                    <span> Topic_2</span>
                                </li>
                                <li>
                                    <img src="/pptx-file.png" alt="img" height={20} width={20}/>
                                    <span> Topic_3</span>
                                </li>
                                <li>
                                    <img src="/pdf.png" alt="img" height={20} width={20}/>
                                    <span> Topic_4</span>
                                </li>
                                <li>
                                    <img src="/pptx-file.png" alt="img" height={20} width={20}/>
                                    <span> Topic_5</span>
                                </li>
                                <li>
                                    <img src="/word.png" alt="img" height={20} width={20}/>
                                    <span> Topic_6</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column custom-col box3 rounded">
                        <h2>Videos</h2>
                        <div className="container rounded bg-primary bg-gradient bg-opacity-50 py-2">
                            <ul className="list-cont">
                                <li>
                                    <img src="/youtube.png" alt="img" height={20} width={20}/>
                                    <span> Video_title_1</span>
                                </li>
                                <li>
                                    <img src="/youtube.png" alt="img" height={20} width={20}/>
                                    <span> Video_title_2</span>
                                </li>
                                <li>
                                    <img src="/youtube.png" alt="img" height={20} width={20}/>
                                    <span> Video_title_3</span>
                                </li>
                                <li>
                                    <img src="/youtube.png" alt="img" height={20} width={20}/>
                                    <span> Video_title_4</span>
                                </li>
                                <li>
                                    <img src="/youtube.png" alt="img" height={20} width={20}/>
                                    <span> Video_title_5</span>
                                </li>
                                <li>
                                    <img src="/youtube.png" alt="img" height={20} width={20}/>
                                    <span> Video_title_6</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="check"/>
            <label class="chat-btn" for="check">
                <i class="fa fa-commenting-o comment"></i>
                <i class="fa fa-close close"></i>
            </label>
            <div class="wrapper">
                <div class="header">
                    <h6>Let's Chat - Online</h6>
                </div>
                <div class="text-center p-2">
                    <span>Please fill out the form to start chat!</span>
                </div>
                <div class="chat-form">
                    <input type="text" class="form-control" placeholder="Name"/>
                    <input type="text" class="form-control" placeholder="Email"/>
                    <textarea class="form-control" placeholder="Your Text Message"></textarea>
                    <button class="btn btn-success btn-block">Submit</button>
                </div>
            </div>
        </>
    )
}
