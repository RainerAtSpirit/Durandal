/// <reference path="../../_dts/durandal.d.ts" />
/// <reference path="../../_dts/knockout.d.ts" />

import viewModel = module('durandal/viewModel');
// Typescript 0.8.x issue http://typescript.codeplex.com/workitem/47 permit usage of 
//import Project = module('./project');

// Workaround
import _Project = module('./project');
var Project = _Project.ctor;


export var projects = ko.observableArray([
       new Project('Durandal', 'A cross-device, cross-platform application framework written in JavaScript, Durandal is a very small amount of code built on top of three existing and established Javascript libraries: jQuery, Knockout and RequireJS.'),
       new Project('UnityDatabinding', 'A general databinding framework for Unity3D. Includes bindings for UI composition and samples for the NGUI library.'),
       new Project('Caliburn.Micro', 'Caliburn.Micro is a small, yet powerful framework, designed for building applications across all Xaml Platforms. With strong support for MVVM and other proven UI patterns, Caliburn.Micro will enable you to build your solution quickly, without the need to sacrifice code quality or testability.')
]);

export var activeProject = viewModel.activator().forItems(projects)
