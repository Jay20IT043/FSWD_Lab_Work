import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div class="card" style={{width: "18rem"}}>
            <img src="https://cdn.24.co.za/files/Cms/General/d/3793/31890e44b4ef4c158dda035aec6506a7.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="/newsdetail" class="btn btn-primary">Go somewhere</a>
                </div>
          </div>
        </div>
    )
  }
}

export default NewsItem
