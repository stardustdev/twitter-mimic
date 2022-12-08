import { motion } from 'framer-motion';

const RandomUser = ({ randomUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        key={randomUser.login.username}
        className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out"
      >
        <img
          className="rounded-full"
          width="40"
          src={randomUser.picture.thumbnail}
          alt=""
        />
        <div className="truncate ml-4 leading-5">
          <h4 className="font-bold hover:underline text-[14px] truncate">
            {randomUser.login.username}
          </h4>
          <h5 className="text-[13px] text-gray-500 truncate">
            {randomUser.name.first + ' ' + randomUser.name.last}
          </h5>
        </div>
        <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
          Follow
        </button>
      </div>
    </motion.div>
  );
};

export default RandomUser;
