import { Link } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		<section>
			<div className='container'>
				<div className='row'>
					<div className={styles.featuresBox}>
						<h1>poly-state</h1>
						<p>{siteConfig.tagline}</p>
						<div className={styles.buttons}>
							<Link
								className='button button--secondary button--lg'
								to='/docs/installation'
							>
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
