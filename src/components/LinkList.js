import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';


const LinkList = () => {

const FEED_QUERY = gql`
  {
     links {
       id
       url
       description    
     }
    
  }
`
;
  const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    },
    {
      id: 'link-id-3',
      description: 'google',
      url: 'https://www.google.com/'
    }
  ];

  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>

  );
};

export default LinkList;
