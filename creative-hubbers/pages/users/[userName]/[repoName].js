import React from "react";
import styles from "../../../styles/Repo.module.css";
import { Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const repoName = () => {
  const repos = [
    {
      type: "file",
      size: 625,
      name: "octokit.rb",
      path: "lib/octokit.rb",
      sha: "fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
      url: "https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit.rb",
      git_url:
        "https://api.github.com/repos/octokit/octokit.rb/git/blobs/fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
      html_url:
        "https://github.com/octokit/octokit.rb/blob/master/lib/octokit.rb",
      download_url:
        "https://raw.githubusercontent.com/octokit/octokit.rb/master/lib/octokit.rb",
      _links: {
        self: "https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit.rb",
        git: "https://api.github.com/repos/octokit/octokit.rb/git/blobs/fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
        html: "https://github.com/octokit/octokit.rb/blob/master/lib/octokit.rb",
      },
    },
    {
      type: "dir",
      size: 0,
      name: "octokit",
      path: "lib/octokit",
      sha: "a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
      url: "https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit",
      git_url:
        "https://api.github.com/repos/octokit/octokit.rb/git/trees/a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
      html_url: "https://github.com/octokit/octokit.rb/tree/master/lib/octokit",
      download_url: null,
      _links: {
        self: "https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit",
        git: "https://api.github.com/repos/octokit/octokit.rb/git/trees/a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
        html: "https://github.com/octokit/octokit.rb/tree/master/lib/octokit",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repository</h2>

      <div className={styles.content}>
        <h3 className={styles.foldername}>File Name</h3>
        <div className={styles.fileContainer}>
          {repos.map((repo) => (
            <div className={styles.fileElem}>
              {repo.type === "dir" ? (
                <FolderIcon className={styles.icon} />
              ) : (
                <InsertDriveFileIcon className={styles.icon} />
              )}
              <Typography gutterBottom variant="h4" component="h4">
                {repo.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default repoName;
