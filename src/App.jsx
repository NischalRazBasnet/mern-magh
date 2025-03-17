// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import './App.css';
// //js in component/---props/--routing
// //how react render component/ hooks

// export default function App() {
//   //undefined or null safety
//   const movie = {
//     Title: 'The Godfather',
//     Year: '1972',
//     Rated: 'R',
//     Rating: 9.2,
//     Released: '24 Mar 1972',
//     Runtime: '175 min',
//     Genre: 'Crime, Drama',
//     Director: 'Francis Ford Coppola',
//     Writer: 'Mario Puzo, Francis Ford Coppola',
//     Actors: 'Marlon Brando, Al Pacino, James Caan',
//     Plot: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
//     Language: 'English, Italian, Latin',
//     Country: 'United States',
//     Awards: 'Won 3 Oscars. 31 wins & 30 nominations total',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//     cover:
//       'https://kipcoulson.wordpress.com/wp-content/uploads/2017/07/godfather-hd-movie-title.jpg',
//   };

//   return (
//     <div id='main-container' className='p-10 mx-auto w-[90%] h-[90%] '>
//       <div id='info-section' className='py-15 px-20 rounded-xl'>
//         <div id='info-movie' className='grid grid-cols-[2fr_1fr] gap-5'>
//           <div id='info-box' className=' tracking-wider space-y-5 pr-20'>
//             <div id='info-top' className='space-y-1.5'>
//               <p id='rating' className='text-sm'>
//                 <FontAwesomeIcon
//                   className=' text-yellow-400 pr-2'
//                   icon={faStar}
//                 />
//                 <strong>{movie.Rating}</strong>
//                 <em>/10</em> | {movie.Runtime} |{' '}
//                 <strong>({movie.Rated})</strong> Rated
//               </p>
//               <h1 className='text-4xl font-semibold tracking-wider pb-2'>
//                 {movie.Title}{' '}
//                 <span className='text-2xl tracking-tight'>({movie.Year})</span>
//               </h1>
//               <p>{movie.Plot}</p>
//               <p className='tracking-widest'>
//                 <strong>{movie.Genre}</strong>
//               </p>
//             </div>
//             <div id='info-bottom' className='pt-15 tracking-widest text-base/9'>
//               <p>
//                 <strong>Release Date: </strong>
//                 <em>{movie.Released}</em>
//               </p>
//               <p>
//                 <strong>Languages: </strong>
//                 <em>{movie.Language}</em>
//               </p>
//               <p>
//                 <strong>Casts: </strong>
//                 <em>{movie.Actors}</em>
//               </p>
//               <p>
//                 <strong>Country: </strong>
//                 <em>{movie.Country}</em>
//               </p>
//             </div>
//           </div>
//           <div
//             id='poster'
//             className=' justify-self-end shadow-2xl shadow-neutral-600 rounded-2xl overflow-hidden'
//           >
//             <img src={movie.Poster} alt={movie.Title} />
//           </div>
//         </div>
//         <div id='producers' className='pt-5 text-lg tracking-widest'>
//           <h1 className='font-bold underline underline-offset-5 py-3'>
//             Creators
//           </h1>
//           <div id='producer-detail' className='flex gap-10 flex-wrap text-base'>
//             <p>
//               <strong>Director: </strong>
//               <em>{movie.Director}</em>
//             </p>
//             <p>
//               <strong>Writer: </strong>
//               <em>{movie.Writer}</em>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { posts } from './Data/data';
import PostCard from './components/PostCard';

export default function App() {
  return (
    <div>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}
