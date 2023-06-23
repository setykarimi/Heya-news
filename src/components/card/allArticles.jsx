import { Link } from "react-router-dom";
import motherHood from '../../assets/images/motherhood/motherhood.png';
import avatar2 from '../../assets/images/people/girlFive.png';
import avatar1 from '../../assets/images/people/girlFour.png';
import avatar3 from '../../assets/images/people/girlThree.png';
import camping from '../../assets/images/travel/camping.png';
import friends from '../../assets/images/university/freinds.png';
import CardExplore from "./cardExplore";

const AllArticles = () => {
    const news = [
        {
            type: "Family",
            date: "11:20",
            title: "Woman Up: It's about time we redefine what ",
            avatar: avatar1,
            author: "Mona Sadri",
            img: motherHood
        },
        {
            type: "Travel",
            date: "09:30",
            title: "Camping Up: It's about time we redefine what ",
            avatar: avatar2,
            author: "Sina Mip",
            img: camping
        },
        {
            type: "University",
            date: "10:00",
            title: "Get Mental Health Content from Therapy",
            avatar: avatar3,
            author: "Sosha Kari",
            img: friends
        }
    ]

    return (
        <div className='mt-24'>
            <h2 className='text-3xl text-gray-800 font-medium'>Today Headlines</h2>
            <div className='md:flex justify-between items-center mb-4'>
                <p className='text-gray-500 mt-2 font-light'>Top today news in the US right now</p>
                <Link to='' className=' outline-blue-500 h-full text-gray-400 text-sm  rounded-lg whitespace-nowrap'>See more</Link>
            </div>
            <div className="grid lg:md:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mb-8">
                {news.map(({type, date, title, avatar, author, img})=> <CardExplore 
                type={type} date={date} title={title} avatar={avatar} author={author} img={img}/>)}
            </div>
        </div>
    );
}

export default AllArticles;