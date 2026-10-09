
'use client';

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  'red',
  'pink',
  'black',
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const CustomColorLabel = (props: any) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const TriangleBar = (props: any) => {
  const { x, y, width, height, index, isActive } = props;

  if (
    !Number.isFinite(x) ||
    !Number.isFinite(y) ||
    !Number.isFinite(width) ||
    !Number.isFinite(height)
  ) {
    return null;
  }

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      d={getPath(x, y, width, height)}
      stroke={color}
      strokeWidth={isActive ? 5 : 0}
      fill={color}
      style={{ transition: 'stroke-width 0.3s ease-out' }}
    />
  );
};

const ReadBooksPage = () => {
  const { readBooks } = useContext(BooksContext);

  const data =
    readBooks?.map((book: IBook) => ({
      name: book.bookName,
      uv: book.totalPages,
    })) ?? [];

  return (
    <div className="container mx-auto px-4 py-8">
      {data.length > 0 ? (
        <div className="w-full">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="uv"
                fill="#8884d8"
                shape={TriangleBar}
                label={<CustomColorLabel />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No books read yet.
        </p>
      )}
    </div>
  );
};

export default ReadBooksPage;
