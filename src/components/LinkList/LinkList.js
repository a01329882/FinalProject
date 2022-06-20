import React from 'react';
import Link from '../Link/Link';
import { gql, useQuery } from '@apollo/client';

const LinkList = () => {
    
    const FEED_QUERY = gql`
  {
    links {
        id
        description
        speed
        rotation
        distance
    }
  }
`;
const { loading, error, data } = useQuery(FEED_QUERY);
if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;

console.log(data.links);

  return (
    <div>
        <link link = {data.links[0]}/>
    </div>
  );
};

export default LinkList;