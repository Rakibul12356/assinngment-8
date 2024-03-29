import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { checkLocalStorage } from "../../Utility/utility";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, LabelList } from 'recharts';

const PagesToRead = () => {
    const booksLocal = useLoaderData();
    const [books, setBooks] = useState([]);


    useEffect(() => {
        const getBooksLocalStorage = checkLocalStorage();
        if (booksLocal.length > 0) {
            const filterBooks = booksLocal.filter(book => getBooksLocalStorage.includes(book.bookId));
            setBooks(filterBooks)
        }
    }, [booksLocal])


    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const CustomizedAxisTick = (props) => {
        const { x, y, payload } = props;
        const textAnchor = "middle";
        const fontSize = 13;
        const gap = 10;
        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0}
                    y={0}
                    dy={16}
                    textAnchor={textAnchor}
                    fill="#666"
                    fontSize={fontSize}
                >
                    <tspan x={0} dy={fontSize}>{payload.value}</tspan>
                    <tspan x={0} dy={gap}></tspan>
                </text>
            </g>
        );
    };



    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <BarChart
                    width={1300}
                    height={500}
                    data={books}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="bookName"
                        interval={0}
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        width={100}
                        tick={<CustomizedAxisTick />}
                    />
                    <YAxis
                        ticks={[0, 85, 170, 255, 340]}
                    />
                    <Tooltip />
                    <Bar
                        dataKey="totalPages"
                        fill="#8884d8"
                        shape={<TriangleBar />}
                    >
                        {books.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                        <LabelList dataKey="totalPages" position="top" />
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};


export default PagesToRead;
