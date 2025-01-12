import React from 'react';
import './Help.css';  // Assuming 'helpStyles.css' is your new CSS file name

function Help() {
  return (
    <div className="help-container">
      <h1> Insurance Details</h1>

      <section>
        <h2>Types of Property Insurance</h2>
        <div>
          <h3>Homeowners Insurance</h3>
          <p>
            Protects individuals against damages to their home and possessions due to events like fire, theft, vandalism, or natural disasters.
          </p>
          <h4>Components:</h4>
          <ul>
            <li>Dwelling Coverage</li>
            <li>Personal Property Coverage</li>
            <li>Liability Coverage</li>
            <li>Additional Living Expenses (ALE)</li>
          </ul>
        </div>
        <div>
          <h3>Renters Insurance</h3>
          <p>
            Similar to homeowners insurance but for renters, covering personal belongings inside the rental unit.
          </p>
          <h4>Components:</h4>
          <ul>
            <li>Personal Property</li>
            <li>Liability Protection</li>
            <li>Loss of Use</li>
          </ul>
        </div>
        <div>
          <h3>Commercial Property Insurance</h3>
          <p>
            Protects businesses against loss or damage to commercial property, including buildings, equipment, and inventory.
          </p>
          <h4>Components:</h4>
          <ul>
            <li>Building Coverage</li>
            <li>Contents Coverage</li>
            <li>Business Interruption Coverage</li>
            <li>Liability Coverage</li>
          </ul>
        </div>
        <div>
          <h3>Landlord Insurance</h3>
          <p>
            Protects landlords against damage or loss to rental properties and rental income.
          </p>
          <h4>Components:</h4>
          <ul>
            <li>Property Coverage</li>
            <li>Loss of Rent</li>
            <li>Liability Coverage</li>
          </ul>
        </div>
        <div>
          <h3>Flood Insurance</h3>
          <p>
            Specifically covers damage caused by floods, which may not be covered under standard property insurance policies.
          </p>
          <h4>Components:</h4>
          <ul>
            <li>Building Coverage</li>
            <li>Contents Coverage</li>
          </ul>
        </div>
        <div>
          <h3>Earthquake Insurance</h3>
          <p>
            Covers damage caused by earthquakes, which is typically excluded from standard property insurance policies.
          </p>
          <h4>Components:</h4>
          <ul>
            <li>Building Coverage</li>
            <li>Contents Coverage</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Commonly Covered Perils</h2>
        <ul>
          <li>Fire or Smoke Damage</li>
          <li>Theft or Vandalism</li>
          <li>Windstorms or Hail</li>
          <li>Lightning Strikes</li>
          <li>Water Damage (non-flood related)</li>
          <li>Explosion</li>
          <li>Civil Disturbance</li>
          <li>Riot or Civil Unrest</li>
          <li>Damage from Falling Objects (e.g., tree or debris)</li>
        </ul>
      </section>

      <section>
        <h2>Common Exclusions in Property Insurance</h2>
        <ul>
          <li>Floods (unless specifically covered by flood insurance)</li>
          <li>Earthquakes (unless purchased separately)</li>
          <li>Wear and Tear or Gradual Damage</li>
          <li>Negligence or Poor Maintenance</li>
          <li>Intentional Damage</li>
          <li>Business Loss (unless commercial insurance is purchased)</li>
        </ul>
      </section>

      <section>
        <h2>Additional Coverage Options</h2>
        <ul>
          <li>Umbrella Insurance: Additional liability coverage beyond the limits of your primary property insurance.</li>
          <li>Scheduled Personal Property: Covers high-value items like jewelry, artwork, or collectibles.</li>
          <li>Loss of Rent Insurance: For landlords, this covers income loss if a rental property becomes uninhabitable.</li>
          <li>Home-Based Business Coverage: Extends protection to businesses run from home.</li>
        </ul>
      </section>

      <section>
        <h2>Premium Calculation Factors</h2>
        <ul>
          <li>Location: The risk level of your property’s location (e.g., prone to floods, wildfires).</li>
          <li>Value of Property: The cost to rebuild or repair the structure and replace belongings.</li>
          <li>Property Type: Residential vs. commercial properties can influence the premium.</li>
          <li>Deductible: The higher the deductible, the lower the premium (and vice versa).</li>
          <li>Claims History: A history of prior claims may increase premiums.</li>
          <li>Building Materials: Fire-resistant or durable building materials can reduce premiums.</li>
          <li>Coverage Limits: The more coverage you select, the higher the premium.</li>
        </ul>
      </section>

      <section>
        <h2>Key Terms to Know</h2>
        <ul>
          <li><strong>Premium:</strong> The amount paid for insurance coverage.</li>
          <li><strong>Deductible:</strong> The amount you pay out of pocket before insurance covers the rest of the loss.</li>
          <li><strong>Coverage Limit:</strong> The maximum amount the insurance will pay for a covered loss.</li>
          <li><strong>Exclusions:</strong> Events or damages not covered by the policy.</li>
          <li><strong>Underwriting:</strong> The process by which the insurer assesses the risk of insuring a property.</li>
        </ul>
      </section>
    </div>
  );
}

export default Help;
