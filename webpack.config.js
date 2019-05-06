var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
<<<<<<< HEAD
        path: __dirname + "/dist",
        publicPath: '/'
=======
        path: __dirname + "/dist"
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json",".svg"]
    },
<<<<<<< HEAD
    devServer: {
        historyApiFallback: true,
      },    
=======

>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test : /\.(css|scss)$/,
                use : [
                    'style-loader',
                    'css-loader?importLoader=1&modules&localIdentName=[local]___[hash:base64:5]',
                    'resolve-url-loader',
                    {
                        loader : 'sass-loader?sourceMap',
                        options : {
                            includePaths : [path.resolve(__dirname, 'src')],
                        }
                    }
                ],
                include : [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};