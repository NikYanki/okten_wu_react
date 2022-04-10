import React from 'react';

export const Coment = ({coment}) => {
    return (
        <div>
          <p>{coment.name}</p>
          <p>{coment.email}</p>
          <p>{coment.body}</p>
          <p>{coment.id}</p>
          <p>{coment.postId}</p>
        </div>
    );
};
