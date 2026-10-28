// Parent component
// Manages and displays a list of tasks

// imports
import { useState } from 'react';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskItem from '../TaskItem/TaskItem';
import type { TaskStatus } from '../../types';
import type { TaskListProps } from '../../types';

// Function Component
export default function TaskList() {
    

    // Closure to TaskItem
    function onStatusChange( taskId: string, newStatus: TaskStatus ) {

    };

    // Closure to TaskItem
    function onDelete( taskId: string ) {

    };

    // CLosure to TaskFilter
    function onFilterChange() {

    };

    return (

    );
};