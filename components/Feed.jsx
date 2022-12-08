import { SparklesIcon } from '@heroicons/react/24/outline';

import Input from './Input';
import Post from './Post';

const Feed = () => {
  const posts = [
    {
      id: '1',
      name: 'Pro Dev',
      username: 'stardustdev',
      userImg: '/avatar.png',
      image:
        'https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      text: 'Nice view!!!',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      name: 'Pro Dev',
      username: 'stardustdev',
      userImg: '/avatar.png',
      image:
        'https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      text: 'what a nice view',
      timestamp: '3 hours ago',
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex items-center justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>

      <Input />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
