<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Solo Sports</title>
	<link rel="stylesheet" href="css/base.css">
</head>
<body>
	<section id="todoapp">
		<header id="header">
			<h1>todos</h1>
			<input id="new-todo" placeholder="What needs to be done?" autofocus>
		</header>
		<section id="main">
			<input id="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul id="todo-list"></ul>
		</section>
		<footer id="footer"></footer>
	</section>
	<script type="text/template" id="item-template">
		<div class="view">
			<input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
			<label><%- title %></label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="<%- title %>">
	</script>
	<script type="text/template" id="stats-template">
		<span id="todo-count"><strong><%= remaining %></strong> <%= remaining === 1 ? 'item' : 'items' %> left</span>
		<ul id="filters">
			<li>
				<a class="selected" href="#/">All</a>
			</li>
			<li>
				<a href="#/active">Active</a>
			</li>
			<li>
				<a href="#/completed">Completed</a>
			</li>
		</ul>
		<% if (completed) { %>
		<button id="clear-completed">Clear completed (<%= completed %>)</button>
		<% } %>
	</script>
	<script src="../../assets/base.js"></script>
	<script src="js/lib/jquery.min.js"></script>
	<script src="js/lib/underscore-min.js"></script>
	<script src="../../assets/lodash.min.js"></script>
	<script src="js/lib/backbone-min.js"></script>
	<script src="js/lib/backbone-localstorage.js"></script>
	<script src="js/models/todo.js"></script>
	<script src="js/collections/todos.js"></script>
	<script src="js/views/todos.js"></script>
	<script src="js/views/app.js"></script>
	<script src="js/routers/router.js"></script>
	<script src="js/app.js"></script>
</body>
</html>
