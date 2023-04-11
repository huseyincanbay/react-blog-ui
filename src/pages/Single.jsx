import React from 'react'
import {Link} from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis ut voluptatibus adipisci labore et tenetur explicabo, similique dolorem, ducimus repellendus sed laboriosam at iste quod sapiente rerum non. Iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus, reiciendis nostrum vel similique perferendis dignissimos. Voluptate assumenda vero repellendus, est numquam nobis atque ad delectus aliquam hic possimus reprehenderit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis ut voluptatibus adipisci labore et tenetur explicabo, similique dolorem, ducimus repellendus sed laboriosam at iste quod sapiente rerum non. Iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus, reiciendis nostrum vel similique perferendis dignissimos. Voluptate assumenda vero repellendus, est numquam nobis atque ad delectus aliquam hic possimus reprehenderit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis ut voluptatibus adipisci labore et tenetur explicabo, similique dolorem, ducimus repellendus sed laboriosam at iste quod sapiente rerum non. Iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus, reiciendis nostrum vel similique perferendis dignissimos. Voluptate assumenda vero repellendus, est numquam nobis atque ad delectus aliquam hic possimus reprehenderit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis ut voluptatibus adipisci labore et tenetur explicabo, similique dolorem, ducimus repellendus sed laboriosam at iste quod sapiente rerum non. Iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus, reiciendis nostrum vel similique perferendis dignissimos. Voluptate assumenda vero repellendus, est numquam nobis atque ad delectus aliquam hic possimus reprehenderit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis ut voluptatibus adipisci labore et tenetur explicabo, similique dolorem, ducimus repellendus sed laboriosam at iste quod sapiente rerum non. Iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus, reiciendis nostrum vel similique perferendis dignissimos. Voluptate assumenda vero repellendus, est numquam nobis atque ad delectus aliquam hic possimus reprehenderit!</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single