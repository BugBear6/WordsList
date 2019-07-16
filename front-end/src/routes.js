import WordsList from './components/WordsList';
import AddWord from './components/AddWord';

export default [{
		path: '*',
		redirect: '/'
	},{
		path: '/',
		name: 'WordsList',
		component: WordsList
	}, {
		path: '/add',
		name: 'AddWord',
		component: AddWord
	}
];
