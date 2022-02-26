class Data {
	constructor() {
		this.database = `<div id="backstore" style="display: none">
		<div id="database">
			<div class="DBMS">
				<h1>DBMS</h1>
				<p>
					A database management system (DBMS) is the software that interacts
					with end users, applications, and the database itself to capture
					and analyze the data. The DBMS software additionally encompasses
					the core facilities provided to administer the database. The sum
					total of the database, the DBMS and the associated applications
					can be referred to as a database system. Often the term "database"
					is also used loosely to refer to any of the DBMS, the database
					system or an application associated with the database.
				</p>
				<h2>History</h2>
				<p>
					The sizes, capabilities, and performance of databases and their
					respective DBMSs have grown in orders of magnitude. These
					performance increases were enabled by the technology progress in
					the areas of processors, computer memory, computer storage, and
					computer networks. The concept of a database was made possible by
					the emergence of direct access storage media such as magnetic
					disks, which became widely available in the mid 1960s; earlier
					systems relied on sequential storage of data on magnetic tape. The
					subsequent development of database technology can be divided into
					three eras based on data model or structure: navigational,[8]
					SQL/relational, and post-relational.
				</p>
				<h2>Navigational DBMS</h2>
				<p>
					<img src="assets/images/Charles.png" alt="Charles Bachman pic" class="profile-pic" />
					The introduction of the term database coincided with the
					availability of direct-access storage (disks and drums) from the
					mid-1960s onwards. Navigational DBMS was proposed by
					<strong>Charles Bachman</strong>. In 1971, the Database Task Group
					delivered their standard, which generally became known as the
					CODASYL approach, and soon a number of commercial products based
					on this approach entered the market.The CODASYL approach offered
					applications the ability to navigate around a linked data set
					which was formed into a large network. Applications could find
					records by one of three methods:
				</p>
				<ol type="1">
					<li>
						Use of a primary key (known as a CALC key, typically implemented
						by hashing)
					</li>
					<li>
						Navigating relationships (called sets) from one record to
						another
					</li>
					<li>Scanning all the records in a sequential order</li>
				</ol>
				<h2>Relational DBMS</h2>
				<p>
					<img src="assets/images/edgar.png" alt="Edgar F. Codd pic" class="profile-pic" />
					Edgar F. Codd worked at IBM in San Jose, California, in one of
					their offshoot offices that was primarily involved in the
					development of hard disk systems. He was unhappy with the
					navigational model of the CODASYL approach, notably the lack of a
					"search" facility. In 1970, he wrote a number of papers that
					outlined a new approach to database construction that eventually
					culminated in the groundbreaking A Relational Model of Data for
					Large Shared Data Banks.
				</p>
				<p>
					In this paper, he described a new system for storing and working
					with large databases. Instead of records being stored in some sort
					of linked list of free-form records as in CODASYL, Codd's idea was
					to organize the data as a number of "tables", each table being
					used for a different type of entity. Each table would contain a
					fixed number of columns containing the attributes of the entity.
					One or more columns of each table were designated as a primary key
					by which the rows of the table could be uniquely identified;
					cross-references between tables always used these primary keys,
					rather than disk addresses, and queries would join tables based on
					these key relationships, using a set of operations based on the
					mathematical system of relational calculus (from which the model
					takes its name). Splitting the data into a set of normalized
					tables (or relations) aimed to ensure that each "fact" was only
					stored once, thus simplifying update operations. Virtual tables
					called views could present the data in different ways for
					different users, but views could not be directly updated.
				</p>
				<h2>SQL DBMS</h2>
				<p>
					IBM started working on a prototype system loosely based on Codd's
					concepts as System R in the early 1970s. The first version was
					ready in 1974/5, and work then started on multi-table systems in
					which the data could be split so that all of the data for a record
					(some of which is optional) did not have to be stored in a single
					large "chunk". Subsequent multi-user versions were tested by
					customers in 1978 and 1979, by which time a standardized query
					language SQL had been added. Codd's ideas were establishing
					themselves as both workable and superior to CODASYL, pushing IBM
					to develop a true production version of System R, known as SQL/DS,
					and, later, Database 2
				</p>
				<h2>NoSQL and NewSQL</h2>
				<p>
					XML databases are a type of structured document-oriented database
					that allows querying based on XML document attributes. XML
					databases are mostly used in applications where the data is
					conveniently viewed as a collection of documents, with a structure
					that can vary from the very flexible to the highly rigid: examples
					include scientific articles, patents, tax filings, and personnel
					records.
				</p>
				<p>
					NoSQL databases are often very fast, do not require fixed table
					schemas, avoid join operations by storing denormalized data, and
					are designed to scale horizontally.
				</p>
				<p>
					NewSQL is a class of modern relational databases that aims to
					provide the same scalable performance of NoSQL systems for online
					transaction processing (read-write) workloads while still using
					SQL and maintaining the ACID guarantees of a traditional database
					system.
				</p>
			</div>
		</div>
	</div>`;
		this.sql = `<div id="backstore" style="display: none">
		<div id="sql">
			<div class="DBMS">
				<h1>SQL</h1>
				<p>
					SQL is a domain-specific language used in programming and designed
					for managing data held in a relational database management system
					(RDBMS), or for stream processing in a relational data stream
					management system (RDSMS). It is particularly useful in handling
					structured data, i.e. data incorporating relations among entities
					and variables. SQL offers two main advantages over older
					read-write APIs such as ISAM or VSAM. Firstly, it introduced the
					concept of accessing many records with one single command.
					Secondly, it eliminates the need to specify how to reach a record,
					e.g. with or without an index.
				</p>
				<h2>History</h2>
				<p>
					<img src="assets/images/donald.png" alt="Donald D.Chamberlin pic" class="profile-pic" />
					SQL was initially developed at IBM by Donald D. Chamberlin and
					Raymond F. Boyce after learning about the relational model from
					Edgar F. Codd in the early 1970s. This version, initially called
					SEQUEL (Structured English Query Language), was designed to
					manipulate and retrieve data stored in IBM's original
					quasirelational database management system, System R, which a
					group at IBM San Jose Research Laboratory had developed during the
					1970s. After testing SQL at customer test sites to determine the
					usefulness and practicality of the system, IBM began developing
					commercial products based on their System R prototype, including
					System/38, SQL/DS, and DB2, which were commercially available in
					1979, 1981, and 1983, respectively.
				</p>
				<p>
					In the late 1970s, Relational Software, Inc. (now Oracle
					Corporation) saw the potential of the concepts described by Codd,
					Chamberlin, and Boyce, and developed their own SQL-based RDBMS
					with aspirations of selling it to the U.S. Navy, Central
					Intelligence Agency, and other U.S. government agencies. In June
					1979, Relational Software introduced one of the first commercially
					available implementations of SQL, Oracle V2 (Version2) for VAX
					computers
				</p>
			</div>
		</div>
	</div>`;
		this.harsha = `<div id="backstore" style="display: none">
		<div id="Harsha">
			<div class="flex-container-data">
				<div class="flex-container-data-1">
					<ul>
						<a href="#">
							<li class="active-link">
								<i class="fas fa-user"></i>
								<span>About</span>
							</li>
						</a>
						<a href="https://harsha662002.github.io/Personal_Portfolio/" target="_blank">
							<li>
								<i class="fas fa-paint-brush"></i>
								<span>Website</span>
							</li>
						</a>
						<a href="https://github.com/Harsha662002" target="_blank">
							<li>
								<i class="fab fa-github"></i>
								<span>github</span>
							</li>
						</a>
						<a href="https://www.linkedin.com/in/harsha-vasireddy-9a12671ba/" target="_blank">
							<li>
								<i class="fab fa-linkedin-in"></i>
								<span>LinkedIn</span>
							</li>
						</a>
					</ul>
				</div>
				<div class="flex-container-data-2">
					<img src="assets/images/harsha.png" alt="harsha pic" class="profile-pic" />
					<h2>Hi I'm Harsha Vasireddy</h2>
					<p>
						I am 2nd year Computer Science at IIITDM Kancheepuram.I am
						beginner in webdev with just 1 year experience and just want to
						go deep down into it.I have been in front-end webdev and hungry
						to learn backend also.
					</p>
					<p>
						It's just not been webdev, my other interests lie in competitive
						programming as well as I have been attempting quite a few
						contests.
					</p>
					<p>
						My non-academic stuff basically include my love for
						cricket,kabaddi and movies.I have even the background of
						baseball and was also a part of my school team.
					</p>
				</div>
			</div>
		</div>
	</div>`;
		this.ravindar = `<div id="backstore" style="display: none">
		<div id="Ravindar">
			<div class="flex-container-data">
				<div class="flex-container-data-1">
					<ul>
						<a href="#">
							<li class="active-link">
								<i class="fas fa-user"></i>
								<span>About</span>
							</li>
						</a>
						<a href="https://ravindar832.github.io/Blog/" target="_blank">
							<li>
								<i class="fas fa-paint-brush"></i>
								<span>Website</span>
							</li>
						</a>
						<a href="https://github.com/Ravindar832" target="_blank">
							<li>
								<i class="fab fa-github"></i>
								<span>github</span>
							</li>
						</a>
						<a href="http://linkedin.com/in/gugulothu-ravindar-85683a232" target="_blank">
							<li>
								<i class="fab fa-linkedin-in"></i>
								<span>LinkedIn</span>
							</li>
						</a>
					</ul>
				</div>
				<div class="flex-container-data-2">
					<img src="assets/images/ravinder.png" alt="harsha pic" class="profile-pic" />
					<h2>Hi I'm Ravindar</h2>
				</div>
			</div>
		</div>
	</div>`;
		this.praveen = `<div id="backstore" style="display: none">
		<div id="Praveen">
			<div class="flex-container-data">
				<div class="flex-container-data-1">
					<ul>
						<a href="#">
							<li class="active-link">
								<i class="fas fa-user"></i>
								<span>About</span>
							</li>
						</a>
						<a href="https://praveen-prav.github.io/Praveen/" target="_blank">
							<li>
								<i class="fas fa-paint-brush"></i>
								<span>Website</span>
							</li>
						</a>
						<a href="https://github.com/praveen-prav" target="_blank">
							<li>
								<i class="fab fa-github"></i>
								<span>github</span>
							</li>
						</a>
						<a href="https://www.linkedin.com/in/praveen-pravee-594521194" target="_blank">
							<li>
								<i class="fab fa-linkedin-in"></i>
								<span>LinkedIn</span>
							</li>
						</a>
					</ul>
				</div>
				<div class="flex-container-data-2">
					<img src="assets/images/praveen.png" alt="harsha pic" class="profile-pic" />
					<h2>Hi I'm Praveen</h2>
				</div>
			</div>
		</div>
	</div>`;
		this.vineeth = `<div id="backstore" style="display: none">
		<div id="Vineeth">
			<div class="flex-container-data">
				<div class="flex-container-data-1">
					<ul>
						<a href="#">
							<li class="active-link">
								<i class="fas fa-user"></i>
								<span>About</span>
							</li>
						</a>
						<a href="https://vineethchabala.github.io/VineethChabalaPortfolio/" target="_blank">
							<li>
								<i class="fas fa-paint-brush"></i>
								<span>Website</span>
							</li>
						</a>
						<a href="https://github.com/VineethChabala" target="_blank">
							<li>
								<i class="fab fa-github"></i>
								<span>github</span>
							</li>
						</a>
						<a href="https://www.linkedin.com/in/vineeth-chabala-86b077213/" target="_blank">
							<li>
								<i class="fab fa-linkedin-in"></i>
								<span>LinkedIn</span>
							</li>
						</a>
					</ul>
				</div>
				<div class="flex-container-data-2">
					<img src="assets/images/vineeth.png" alt="harsha pic" class="profile-pic" />
					<h2>Hi I'm Vineeth</h2>
				</div>
			</div>
		</div>
	</div>`;
		this.nagasai = `<div id="backstore" style="display: none">
		<div id="Nagasai">
			<div class="flex-container-data">
				<div class="flex-container-data-1">
					<ul>
						<a href="#">
							<li class="active-link">
								<i class="fas fa-user"></i>
								<span>About</span>
							</li>
						</a>
						<a href="https://nsvegur.github.io/Blog" target="_blank">
							<li>
								<i class="fas fa-paint-brush"></i>
								<span>Website</span>
							</li>
						</a>
						<a href="https://github.com/NSVEGUR" target="_blank">
							<li>
								<i class="fab fa-github"></i>
								<span>github</span>
							</li>
						</a>
						<a href="https://www.linkedin.com/in/nagasai-v-93b84921b" target="_blank">
							<li>
								<i class="fab fa-linkedin-in"></i>
								<span>LinkedIn</span>
							</li>
						</a>
					</ul>
				</div>
				<div class="flex-container-data-2">
					<img src="assets/images/nagasai.png" alt="harsha pic" class="profile-pic" />
					<h2>Hi I'm Nagasai Vegur</h2>
					<p>
						I am a Developer, Designer and Coding enthusiast. OFC I am a beginner in dev 😅. I am passionate about
						Data Science, Web Dev, App Dev and
						Problem solving.
						I wanna learn something new, and enjoy trying out new technologies. Find my works in my gitty 😺.
					</p>
					<p>
						Present I am studying in 2nd year CSE in IIITDM Kancheepuram. Even got a quite experience in app
						development👨🏻‍💻 and game development. Life is not only about dev, I love watching movies, listening
						songs and
						playing cricket.
						Perfect🎧 which is my fav available in this dbOS playlist. Go check it out.
					</p>
					<p>
						I love to paint in frontend, respond in backend, script in types, build in apps and what not still
						learning many more things. (NVM I don't no much about them just learning things 👻)
					</p>
				</div>
			</div>
		</div>
	</div>`;
	}
	static windows = this.database + this.sql + this.harsha + this.ravindar + this.vineeth + this.nagasai;
}

document.getElementById('windows').innerHTML = Data.windows;