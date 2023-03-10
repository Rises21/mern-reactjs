import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react"; 

const SearchBar = () =>  {

    let [ news, setNews ] = useState([]);
    let [ loading, setLoading ] = useState(false);
    let [ search, setSearch ] = useState("");
    console.log(search,">>>>>>")
    let [ page, setPage ] = useState(1);
    let [ newsPages ] = useState(5);
    let [ error, setError ] = useState(null);
    //     constructor(props){
    //     super(props);
    //     this.state = {
    //         berita: [],
    //         loading: false,
    //         error: null,
    //         pencarian: "",
    //         halaman: 1,
    //         beritaPerHalaman: 5,
    //         batasWaktuMemantul: null
    //     };
    //     this.handleSearch = this.handleSearch.bind(this);
    //     this.filterBerita = this.filterBerita.bind(this);
    //     this.bersihkanPencarian = this.bersihkanPencarian.bind(this);
    //     this.handlePageChange = this.handlePageChange.bind(this);
    // }
    // componentDidMount() {
    //     this.panggilApiBerita();
    // }

    // shouldComponentUpdate(){
    //     console.log(this.shouldComponentUpdate,"<><><><>");
    //     return true;
    // }

    // componentWillUnmount() {
    //     clearTimeout(this.state.batasWaktuMemantul);
    // }

    useEffect(()=>{
        if (search === "") {
                setLoading(loading = true);
                axios.get(
                    "http://newsapi.org/v2/top-headlines?country=us&apiKey=989548329dd94e968d3d9779c9310de3"
                )
                .then((res) => {
                    setNews(news = res.data.articles)
                    setLoading(loading = false)
                })
                .catch((err) => {
                    setError(error = err.message)
                    setLoading(loading = false)
                })
                .finally(() => {
                    console.log("Use Effect axios get executed <<<");
                });
            
        }
        if (search.length > 3 ) {
                setLoading(loading = true);
                axios.get(
                    `https://newsapi.org/v2/everything?q=${search}&apiKey=989548329dd94e968d3d9779c9310de3`
                )
                .then((res) => {
                    setNews(news = res.data.articles)
                    setLoading(loading = false)
                })
                .catch((err) => {
                    setError(error = err.message)
                    setLoading(loading = false)
                })
                .finally(() => {
                    console.log("Second useEffect axios get executed <<<");
                });
        }

    }, [search]);

    
    const handleSearch = (e) => {
        console.log("handleSearch executed!");
        setSearch(search = e.target.value)
    }
  
    const clearSearch = () => {
        console.log("clearSearch executed!");
        setSearch( search = "")
         setPage( page = 1)
    }
    const handlePageChange = e => {
        console.log("handlePageChagne executed!");
        setPage( page = Number(e.target.id) );
    }



        const styleContainer = {
            width: "95%",
            backgroundColor: "#fafafa",
            margin:"15px auto",
            padding: "40px",
            boxShadow: "1px 0 6px 1px #000",
            
        }

        //         console.log(this.state.berita,">>>");
        // const { loading, error, pencarian, halaman, beritaPerHalaman } = this.state;
        // if(loading){
        //     console.log("kondisi if loading execute!");
        //     return <div style={{fontSize:"3 rem"}}>LOADING...</div>      
        // }
        // if (error) {
        //     console.log("kondisi if error execute!");
        //     return <div style={{fontSize:"3 rem"}}>{error}</div>
        // }



        const lastIndexOfNews = page * newsPages;
        
        const firstIndexOfNews  = lastIndexOfNews - newsPages;
        console.log(page, " X ",newsPages," = ", lastIndexOfNews,"<<< last index of news  ");
        console.log(lastIndexOfNews, " - ", newsPages," = ", firstIndexOfNews, ">>> first index of news");
        const filteredNews = news.slice(firstIndexOfNews, lastIndexOfNews);
        console.log(filteredNews,"<><><><>");
        const pageNumber = [];
        for (let i = 1; i <= Math.ceil(news.length / newsPages); i++) {
            pageNumber.push(i)

            // console.log(pageNumber,"<<<<<<");
        }
             console.log(news.length, " dibagi ", newsPages);
             console.log(pageNumber,"page number<<<<");

        return(
            <div style={styleContainer}>
                <input style={{height: "30px", width: "100%", marginBottom: "10px",padding: "10px"}}
                type="text"
                placeholder="Cari Berita..."
                value={search}
                onChange={handleSearch}
                />

                    { loading ? (
                        <div style={{fontSize:"3 rem"}}>LOADING...</div>      
                    ) : null}
                    { error ? (
                        <div style={{fontSize:"3 rem"}}>{error}</div>      
                    ) : null}
        
                {filteredNews.length === 0 ? (
                    <div style={{marginTop: "30px", fontSize: "2rem", textAlign: "center"}}>Berita Tidak Ditemukan</div>
                ) : (
                    <div>
                        <button id="btnSearch" onClick={clearSearch}>Clear Search</button>
                        {filteredNews.map((article) => (
                            <>
                             <div key={article.url}>
                                <h2 style={{clear:"both",marginTop: "15px"}}>{article.title}</h2>
                                <img style={{width:"200px",float:"left", margin:"8px"}} src={article.urlToImage} alt={article.title}/><hr />
                                <p>{article.description} <a href={article.url}>More Information...</a></p>
                            </div>
                            <hr style={{clear:"both", marginBottom:"30px"}} /> 
                            </>

                        ))}

                        <div style={{backgroundColor:"rgba(0,0,0, .2)",clear:"both"}}>
                            {pageNumber.map((num) => (
                                <button 
                                style={{width:"40px",margin:"10px",textAlign:"center"}}
                                key={num}
                                id={num}
                                onClick={handlePageChange}
                                className={page === num ? "active" : ""}
                                >{num}</button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    
}
export default SearchBar;