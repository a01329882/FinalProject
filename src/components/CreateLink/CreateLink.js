import React, { useState } from 'react';

import { useMutation, gql } from '@apollo/client';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $distance: String!
    $rotation: String!
    $speed: String!
  ) {
    createLink (distance: $distance, rotation: $rotation, speed: $speed){
      distance
      rotation
      speed
    }
  }
`;

const CreateLink = () => {
  const [formState, setFormState] = useState({
    distance: '',
    rotation: '',
    speed:'',
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      distance: formState.distance,
      rotation: formState.rotation,
      speed: formState.speed
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.distance}
            onChange={(e) =>
              setFormState({
                ...formState,
                distance: e.target.value
              })
            }
            type="text"
            placeholder="distance"
          />
          <input
            className="mb2"
            value={formState.rotation}
            onChange={(e) =>
              setFormState({
                ...formState,
                rotation: e.target.value
              })
            }
            type="text"
            placeholder="rotation"
          />
          
          <input
            className="mb2"
            value={formState.speed}
            onChange={(e) =>
              setFormState({
                ...formState,
                speed: e.target.value
              })
            }
            type="text"
            placeholder="speed"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;