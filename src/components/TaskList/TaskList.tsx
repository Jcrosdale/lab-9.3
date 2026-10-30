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
    { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending', priority: 'low', dueDate: '2023-31-12' },
    { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress', priority: 'medium', dueDate: '2024-01-01' },
    { id: '3', title: 'Task 3', description: 'Description 3', status: 'completed', priority: 'high', dueDate: '2024-01-02' }
];

// Function Component
export default function TaskList() {

    // useState
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: Task['priority'] }>({});

    // Closure to TaskItem
    function onStatusChange(taskId: string, newStatus: TaskStatus) {
        // Updates only the selected task
        setTasks(prev => prev.map(task => task.id === taskId ? { ...task, status: newStatus } : task))
    };

    // Closure to TaskItem
    function onDelete(taskId: string) {
        // Set for a new array to be created if a task is deleted
        setTasks(prev => prev.filter(task => task.id !== taskId));
    };

    // CLosure to TaskFilter
    function onFilterChange(newFilters: { status?: TaskStatus; priority?: Task['priority']; }) {
        setFilters(newFilters);
    };

    // Tasks matching the active filters
    const visibleTasks = tasks.filter(task =>
        (!filters.status || task.status === filters.status) &&
        (!filters.priority || task.priority === filters.priority)
    );

    return (
        <div>
            <TaskFilter onFilterChange={onFilterChange} />

            {visibleTasks.length === 0 ? (
                <p>No tasks match</p>
            ) : (
                visibleTasks.map(task => (
            <TaskItem
                key={tasks.id}
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
            />
            ))
            )}
        </div>
    );

};