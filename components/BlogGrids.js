import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import {useRouter} from 'next/router'
import { motion } from "framer-motion";
import {BsArrowRight} from 'react-icons/bs';

import Button from "@/shared/Button";
import checkLanguage from "@/miscs/checkLanguage";
import months from "@/miscs/months";
import minimize from '@/miscs/minimize';
import decrease from "@/miscs/decrease";


const BlogGrids = () => {

    const R = useRouter()
    const [current, setCurrent] = useState(3); //INITIAL LOAD COUNT
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('DESC');
    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(false);
    const [searchedData, setSearchedData] = useState([]);
    const increaser = 3

    useEffect(()=>{
        goLoadMore()
    },[current, filter])

    const goLoadMore = async () => {
        let queryString = `
        {
            newsletters(sort: "createdAt:${filter}", limit:${current}) {
            Title
            Thumb {url formats}
            Content
            Slug
            createdAt
            }
        }
        `;
        let res = await checkLanguage(queryString, null);
        setData(res.data.newsletters)
        setLoad(true)
    }

    const filterHandler = e => setFilter(e.target.value);
    const loadmoreHandler = () => setCurrent(current + increaser);
    
    const handleEnter = async (e) => {
        if(e.key === 'Enter'){
            if(search !== ""){
                setLoad(false);
                let res = await checkLanguage(`/newsletters?Title_contains=${search}`, null, true)
                res.data.length ? setSearchedData(res.data) : window.alert(`No results with "${search}"`);
                return setLoad(true);
            }
            closeSearchHandler();
        }
    }
    const closeSearchHandler = () => {
        setSearchedData([]);
        setSearch('');
    }
    return (
        <Container className="container">
            <div className="row">
            <div className="col-md-3 mb-4">
                {!searchedData.length ?
                    <div className="search">
                        <input className="form-control" placeholder="Search ..." value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleEnter} />
                    </div>
                : null}
            </div>
            <div className="col-md-3 mb-4 offset-md-6">
                {!searchedData.length ?
                    <select className="form-control" onChange={filterHandler}>
                        <option value="DESC">Newest to oldest</option>
                        <option value="ASC">Oldest to newest</option>
                    </select>
                : null}
            </div>
            <motion.div animate="show" initial="hide" variants={container}>
                {searchedData.length ? <motion.p className="col-md-12 mb-4 search-query">Search: <span onClick={closeSearchHandler}>{search}</span></motion.p> : null}
            {load ? 
                searchedData.length ?
                searchedData.map((el,i)=>{
                    let date = new Date(el.createdAt)
                    return(
                        <div className="col-md-4" style={{marginBottom: 30}} key={'cols'+i}>
                            <motion.div className="box" variants={elem}>
                                <Link href={R.pathname + '/' + el.Slug}>
                                    <a>
                                        <motion.div variants={elemImg} className="img" style={{backgroundImage:`url(${minimize(el.Thumb[0],true)})`,}}>
                                            <div className="date">
                                                <p>{date.getDate()}</p>
                                                <small>{months[date.getMonth()]}</small>
                                            </div>
                                        </motion.div>
                                    </a>
                                </Link>
                                
                                <div className="text">
                                    <motion.h4 variants={elemText}>
                                        {decrease(
                                            el.Title,
                                            38
                                        )}
                                        ...
                                    </motion.h4>
                                    <span>DAILY NEWS | BY ADMIN</span>
                                    <motion.p variants={elemP}>
                                        {decrease(
                                            el.Content,
                                            105
                                        )}
                                        ...
                                    </motion.p>
                                    <a href="#">
                                        Read More <BsArrowRight/>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    )
                })
                :
                data.map((el,i)=>{
                    let date = new Date(el.createdAt)
                    return(
                        <div className="col-md-4" style={{marginBottom: 30}} key={'cols'+i}>
                            <motion.div className="box" variants={elem}>
                                <Link href={R.pathname + '/' + el.Slug}>
                                    <a>
                                        <motion.div variants={elemImg} className="img" style={{backgroundImage:`url(${minimize(el.Thumb[0],true)})`,}}>
                                            <div className="date">
                                                <p>{date.getDate()}</p>
                                                <small>{months[date.getMonth()]}</small>
                                            </div>
                                        </motion.div>
                                    </a>
                                </Link>
                                
                                <div className="text">
                                    <motion.h4 variants={elemText}>
                                        {decrease(
                                            el.Title,
                                            38
                                        )}
                                        ...
                                    </motion.h4>
                                    <span>DAILY NEWS | BY ADMIN</span>
                                    <motion.p variants={elemP}>
                                        {decrease(
                                            el.Content,
                                            105
                                        )}
                                        ...
                                    </motion.p>
                                    <a href="#">
                                        Read More <BsArrowRight/>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    )
                })
             : null}
            </motion.div>
            <div className="col-md-12">
                {!searchedData.length ? load ? <Button className="loadmore" onClick={loadmoreHandler}>Load More</Button> : <Button className="loadmore loading"><img src="/img/spinner.gif"/></Button> : null}
            </div>
            </div>
        </Container>
    );
};

export default BlogGrids;

const Container = styled.div`
    padding-top: 10vh;
    padding-bottom: 10vh;
    .form-control{
        border:none;
        border-radius:0px;
        border-bottom:1px solid rgba(0,0,0,0.2);
        outline: none;
        font-weight: 400;
    }
    .box {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
        overflow:hidden;
        .img {
            background-size: auto 100%;
            background-position: top center;
            background-repeat: no-repeat;
            height: 200px;
            position: relative;
            transition:0.5s ease;
            &:hover{
                background-size: auto 105%;
            }
            .date {
                position: absolute;
                padding: 5px 15px;
                background: white;
                left: 15px;
                text-align: center;
                p {
                    margin-bottom: 0px;
                    font-weight: 600;
                    font-size: ${(props) => props.theme.fontSize2};
                    opacity: 0.9;
                }
                small {
                    margin-top: -5px;
                    display: block;
                }
            }
        }
        .text {
            padding: 15px 20px;
            h4 {
                font-family: ${(props) => props.theme.fontFamily2};
            }
            span {
                margin-bottom: 10px;
                display: block;
            }
            p{
                font-weight:400;
            }
            a{
                font-weight:400;
                svg{
                    margin-left:10px;
                }
            }
        }
    }
    .loadmore{
        display:block;
        margin:auto;
        border-color: rgba(0,0,0,0.2);
        color:rgba(0,0,0,0.6);
        &.loading{
            border:none;
            img{
                width:100px;
            }
        }
    }
    .search-query{
        font-weight:bold;
        span{
            font-weight:400;
            padding:4px 10px;
            border:1px solid rgba(0,0,0,0.1);
            border-radius:5px;
            margin-left:15px;
            &:hover{
                cursor:pointer;
            }
            &:after{
                display: inline-block;
                font-style: normal;
                font-variant: normal;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                font-family: "Font Awesome 5 Free";
                font-weight: 600;
                content: "\f057";
                margin-left:10px;
            }
        }
    }
`;

const container = {
    show: {
        transition: {
            staggerChildren: 0.5
        }
    }
}
const elem = {
    hide: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.7
        }
    }
}
const elemText = {
    hide: {
        opacity: 0,
        x: 50
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.7
        }
    }
}
const elemP = {
    hide: {
        opacity: 0,
        x: -50
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.7
        }
    }
}
const elemImg = {
    hide: {
        opacity: 0,
        y: -50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.7
        }
    }
}