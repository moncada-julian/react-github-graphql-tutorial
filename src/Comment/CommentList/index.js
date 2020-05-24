import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import { GET_COMMENTS_OF_ISSUE } from './queries';
import CommentItem from '../CommentItem';
import CommentAdd from '../CommentAdd';