from flask import Flask, request


app = Flask(__name__)


@app.route('/')
def home_page():
    html = """
    <html>
        <body>
            <h1>Home Page!</h1>
            <p>Welcome to my simple app.</p>
            <a href='/hello'>Go to the hello page</a>
        </body>
    </html>
    """
    return html


@app.route('/hello')
def say_hello():
    html = """
    <html>
        <body>
            <h1>Hello!</h1>
            <p>This is the hello page.</p>
        </body>
    </html>
    """
    return html


@app.route('/goodbye')
def say_bye():
    return "Goodbye"


@app.route('/search')
def search():
    term = request.args['term']
    sort = request.args['sort']
    return f"<h1>Search Results For: {term}</h1> <p>Sorting by: {sort}</p>"


# @app.route('/post', methods=["POST"])
# def post_demo():
#     return 'You made a post request'


# @app.route('/post', methods=["GET"])
# def get_demo():
#     return "You made a get request"

# Browser uses the 'name' in forms to construct key value pairs
@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add comment</h1>
    <form method="POST">
        <input type='text palceholder='comment' name='comment'/>
        <input type='text palceholder='username' name='username'/>
        <button>Submit</button>
    </form>
    """


@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment = request.form['comment']
    username = request.form['username']
    print(request.form)
    return f"""
        <h1>Saved your comment</h1>
        <ul>
            <li>Username: {username}</li>
            <li>Username: {comment}</li>
        </ul>
    """


@app.route('/r/<subreddit>')  # Parameter needs to match what is inside <>
def show_subreddit(subreddit):
    return f"<h1>Browsing The {subreddit} Subreddit</h1>"


@app.route('/r/<subreddit>/comments/<int:post_id>')
def show_comments(subreddit, post_id):
    return f"<h1>Viewing comments for post with id: {post_id} from {subreddit} Subreddit</h1>"


POST = {
    1: "Hello",
    2: "Rainbowns",
    3: "I hate worms",
    4: "This is a fake database"
}


@app.route('/posts/<int:id>')
def find_post(id):
    post = POST.get(id, "Post not found")
    return f"<p>{post}</p>"
