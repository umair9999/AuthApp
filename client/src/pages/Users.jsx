import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

export default function UserList() {
  const { data, error } = useSWR('http://localhost:3000/readalluser', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((user) => (
          <div key={user.email} className="bg-white shadow-md rounded-lg p-4">
            <img src={user?.profilePicture} alt={user.username} className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-xl font-bold text-center mt-2">{user?.username}</h2>
        
          </div>
        ))}
      </div>
    </div>
  );
}
