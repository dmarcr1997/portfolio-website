import React, {Component} from 'react';
import Blog from '../components/Blog';

class Blogs extends Component{
    state = {
        user_blogs: [],
        loading: true
    }
    componentDidMount(){
        const DEV_TO_URL = "https://dev.to/api/articles"
        fetch(DEV_TO_URL + '?username=dmarcr1997')
        .then(res => res.json())
        .then(data => this.saveBlogs(data))
        .catch(error => console.log("WE HAVE FETCH POST ERROR", error))
    }

    saveBlogs = (data) => {
        console.log('Done')
        this.setState({
            user_blogs: data,
            loading: false
        })
        console.log(this.state)
    }
    renderBlogs = () => {
        if (this.state.loading === true){
            return(<h1>Loading...</h1>)
        }
        else
            return(<ul>{this.state.user_blogs.map((blog,indx) => <Blog key={indx} information={blog} />)}</ul>)
    }
    render(){
        const blogStyle = {
            background: 'black',
            color: 'white',
            textAlign: 'center'
        }
        return(
            <div style={blogStyle}>
                <h1>My Blogs</h1>
                <div>{this.renderBlogs()}</div>
            </div>
        )
    }
}

export default Blogs