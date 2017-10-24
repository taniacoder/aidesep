		section.header
			.container
				.row
					.col-md-4.col-xs-12.col-sm-12
						img(width='70%' src='img/home/logo.png')
					.col-md-8.col-xs-12.col-sm-12
						.head-right
							.logo-m-seeker
								.redes
									.item
										.icon-circle
											i.fa.fa-facebook(aria-hidden="true")
										.icon-circle
											i.fa.fa-twitter(aria-hidden="true")
										.icon-circle
											i.fa.fa-youtube(aria-hidden="true")
										.icon-circle
											i.fa.fa-flickr(aria-hidden="true")
								.search
									form
										input(type='text', value='Buscador', onfocus="this.value = '';", onblur="if (this.value == '') {this.value = '';}")
										input(type='submit', value='BUSCADOR')
		section.menu
			nav.navbar.navbar-default
				.container
					// Brand and toggle get grouped for better mobile display
					.navbar-header
						button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#bs-example-navbar-collapse-1', aria-expanded='false')
							span.sr-only Toggle navigation
							span.icon-bar
							span.icon-bar
							span.icon-bar
						.redes-seeker.collapsed
							ul.social-in
								li
									a(href='#')
										i.facebook  
								li
									a(href='#')
										i.twitter  
								li
									a(href='#')
										i.youtube  
								li
									a(href='#')
										i.rs  
					// Collect the nav links, forms, and other content for toggling
					#bs-example-navbar-collapse-1.collapse.navbar-collapse
						ul.nav-flex
							li
								a(href='#') INICIO
							li.dropdown
								a.dropdown-toggle(href='#', data-toggle='dropdown', role='button', aria-haspopup='true', aria-expanded='false')
									| NOSOTROS
									span.caret
								ul.dropdown-menu
									li
										a(href='#') QUIENENS SOMOS
									li
										a(href='#') NUESTRA HISTORIA
									li
										a(href='#') MÍSION Y VÍSION
									li
										a(href='#') CONSEJO DIRECTIVO
									li
										a(href='#') 
											|ORGANIZACIONES 
											br
											| REGIONALES
									li
										a(href='#') QUÉ QUEREMOS
							li
								a(href='#') NUESTRO TRABAJO
							li
								a(href='#') NOTICIAS
							li
								a(href='#') MULTIMEDIA
							li
								a(href='#') CONTACTO