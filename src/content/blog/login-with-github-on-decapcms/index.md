---
title: Login with Github on DecapCMS
description: Learn how to handle OAuth with GitHub for DecapCMS using Vercel Functions
draft: true
tags:
  - Vercel
  - DecapCMS
  - OAuth
  - Github
  - serverless
  - astro
date: 2025-03-27T12:27:00.000Z
---
I created this tutorial as I could not find a simple and easy to understand method to add OAuth using Vercel functions to [DecapCMS](https://decapcms.org). But in this tutorial I'll also show you how to add DecamCMS to an existing Astro project to edit the site using an admin interface.

## Getting started

For this tutorial we'll need the following:

1. Node.js installed (v22+).
2. A Github and Vercel account (its free).
3. A project in which you want to add DecapCMS. We'll use the [Astro blog template](https://astro.build/themes/details/blog/) for this tutorial.
4. A custom domain (not mandatory but good to have).

Let's get started 

## Setting up the Astro site

### Cloning the starter project

Create a new project with the Astro blog template. You can keep the directory name as `blog`.

```shell
npm create astro@latest -- --template blog
```

After following the steps you'll have the following directory structure.

```
📦blog
 ┣ 📂.astro
 ┣ 📂.vscode
 ┣ 📂public
 ┣ 📂src
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜astro.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

Now, run the project.

```shell
npm dev
```

And go to <http://localhost:4321>. You'll be able to see the site.

![](1.png)

### Adding a post

Now we'll add a post to the site. Go to `src/content/blog` and create a file named `test.md`

```markdown
---
title: "Test 1"
description: "created using code editor"
pubDate: "Mar 27 2025"
heroImage: "/blog-placeholder-4.jpg"
---

This is a test post
```

Save the file and go to the blog section of the site. Open the **Test 1** post.

![](2.png)

## Deploying the site

Your site is now ready to be deployed. First we'll push the code to Github and then deploy it using vercel.

### Pushing to Github

Create an [empty repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) in Github and push the code.

```
git remote add origin <your repository url>
git branch -M main
git push -u origin main
```

### Deploy on vercel

Login to Vercel using Github for easy configuration. Then add a new project. Choose **Import Git Repository.**

![](3.png)

Finally, click **Deploy.**

![](4.png)

Wait for the site to get deployed. When the site is deployed click on the url to open the site.

![](5.png)

Now if you add a post and push to your repository vercel will automatically build and deploy the site. But this becomes clunky if you do not have access to you machine with the repository setup locally. So the make it easier to add and edit posts well add DecapCMS so that you can edit the blog from anywhere through an interface in your browser only.

## Adding DecapCMS

### Configuring DecapCMS

Create two files inside `public/admin/` 

```
📦public
 ┣ 📂admin
 ┃ ┣ 📜config.yml
 ┃ ┗ 📜index.html
 
```

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />

    <title>Content Manager</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

**config.yml**

```yaml
collections:
  - name: "blog" # Used in routes, e.g., /admin/collections/blog
    label: "Blog" # Used in the UI
    folder: "src/content/blog" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    fields: # The fields for each document, usually in frontmatter
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Description", name: "description", widget: "string" }
      - { label: "Publist date", name: "pubDate", widget: "datetime" }
      - { label: "Hero image", name: "heroImage", widget: "string" }

media_folder: "src/assets/images" # Location where files will be stored in the repo
public_folder: "src/assets/images" # The src attribute for uploaded media

backend:
  name: github
  repo: <owner-name>/<repo-name>
  branch: main
```

Now open <http://localhost:4321/admin/index.html> and click **Login with GitHub**.

![](6.png)

If everything worked you will be able to see all your posts.

![](7.png)

### Editing a post

Open the post we just and edit it. When you are done click on **Publish.** DecapCMS will push a commit with the changes to your Github repository and vercel will start the build. Wait for the build to finish and see the changes.

![](8.png)

You'll not be able to edit the posts just yet from the public url on vercel. Commit and push all your changes to Github. We'll need to configure the OAuth for production use.

## Creating OAuth for production

### Create Github OAuth application

Login to Github and go to **Profile > Developer Settings > OAuth Apps > New OAuth app.**

![](9.png)

Enter the following values:

1. **Application name:** blog (can be anything)
2. **Homepage URL:** vercel public url of the app
3. **Application Description:** decap oauth (can be anything)
4. **Authorization callback URL:** <vercel public url>/api/callback 
5. **Enable Device Flow:** Keep unchecked

Click **Register.** On the next page copy the **Client ID** and **Client secret.** We'll need it later.

![](10.png)
