// Parent component
// Manages and displays a list of tasks

// imports
import { useState } from 'react';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskItem from '../TaskItem/TaskItem';
import type { Task, TaskStatus } from '../../types';
import type { TaskListProps } from '../../types';

// Initial (Sample) Tasks
const initialTasks: Task[] = [
    { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending', priority: 'low', dueDate: '2023-31-12'},
    { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress', priority: 'medium', dueDate: '2024-01-01'},
    { id: '3', title: 'Task 3', description: 'Description 3', status: 'completed', priority: 'high', dueDate: '2024-01-02'}
];

// Function Component
export default function TaskList() {
    
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    // Closure to TaskItem
    function onStatusChange( taskId: string, newStatus: TaskStatus ) {

    };

    // Closure to TaskItem
    function onDelete( taskId: string ) {
        setTasks(prev => prev.filter(task => task.id !== taskId));
    };

    // CLosure to TaskFilter
    function onFilterChange() {

    };

    return (

    );
};